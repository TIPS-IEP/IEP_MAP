const button = document.querySelector('#add-button');
const tagInput = document.querySelector('#input');

const form = document.forms[0];
const tagContainer = document.querySelector('.tag-container');
const tags = [];
var verifiedTags = ["advice", "college", "applying", "activities"]

function detectTags(value){
  var verified = false;
  for(var i = 0; i < verifiedTags.length; i++){
    if(value == verifiedTags[i]){
      verified = true;
    }
  }
  console.log(verified)
  return verified;
}

const createTag = (tagValue) => {
    const value = tagValue.trim();

    if (value === '' || tags.includes(value)) return;

    const tag = document.createElement('span');
    const tagContent = document.createTextNode(value);
    console.log(value);
    if(detectTags(value)){
      tag.setAttribute('class', 'verifiedTag');
    }else{
      tag.setAttribute('class', 'tag');
    }
    tag.appendChild(tagContent);

    const close = document.createElement('span');
    close.setAttribute('class', 'remove-tag');
    close.innerHTML = '&#10006;';
    close.onclick = handleRemoveTag;

    tag.appendChild(close);
    tagContainer.appendChild(tag);
    tags.push(tag);

    tagInput.value = '';
    tagInput.focus();
};

const handleRemoveTag = (e) => {
    const item = e.target.textContent;
    e.target.parentElement.remove();
    tags.splice(tags.indexOf(item), 1);
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    createTag(tagInput.value);
};

tagInput.addEventListener('keyup', (e) => {
    const { key } = e;
    if (key === ',') {
        createTag(tagInput.value.substring(0, tagInput.value.length - 1));
    }
});

form.addEventListener('submit', handleFormSubmit);