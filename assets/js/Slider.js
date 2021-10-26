class Slider {
  constructor(images = [], currentIndex = 0) {
    this._images = images;
    this.currentIndex = currentIndex;
  }
  get images() {
    return this._images;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(v) {
    if (typeof v !== 'number' || !Number.isInteger(v) || v < 0)
      throw new TypeError();
    this._currentIndex = v;
  }
  get currentSlide() {
    return this.images[this.currentIndex];
  }
  next() {
    return this._currentIndex + 1;
  }
  prev() {
    return this._currentIndex - 1;
  }
}
