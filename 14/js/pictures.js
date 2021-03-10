const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMG_DESCRIPTION = 'Фотография жилья';
const DEFAULT_IMG = 'img/muffin-grey.svg';

const PhotoSize = {
  WIDTH: 40,
  HEIGHT: 44,
};

const avatarFileChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const houseFileChooser = document.querySelector('.ad-form__input');
const housePreview = document.querySelector('.ad-form__photo');

const setPreviewPhoto = (FileChoose, previewElement) => {
  FileChoose.addEventListener('change', () => {
    const file = FileChoose.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewElement.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

setPreviewPhoto(avatarFileChooser, avatarPreview);


const createImgElement =  document.createElement('img');
createImgElement.width = PhotoSize.WIDTH;
createImgElement.height = PhotoSize.HEIGHT;
createImgElement.alt = IMG_DESCRIPTION;
createImgElement.src = DEFAULT_IMG;
housePreview.style.display = 'flex';
housePreview.style.justifyContent = 'center';
housePreview.style.alignItems = 'center';
housePreview.appendChild(createImgElement);
setPreviewPhoto(houseFileChooser, createImgElement);


const resetPictures = () => {
  avatarPreview.src = DEFAULT_IMG;
  createImgElement.src =DEFAULT_IMG;
};

export {resetPictures};
