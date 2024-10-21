const memocontainer = document.querySelector(".memo-container");
const memoitem = document.querySelectorAll(".memo-item");

class Carousel {
  constructor(Container, item) {
    this.CarouselContainer = Container;
    this.CarouselArray = [...item];
    this.autoSlideInterval = null;
    this.autoSlideDelay = 3000; // Durasi otomatis dalam milidetik (3 detik)
  }

  updatememo() {
    this.CarouselArray.forEach((el) => {
      el.classList.remove("memo-item-1");
      el.classList.remove("memo-item-2");
      el.classList.remove("memo-item-3");
      el.classList.remove("memo-item-4");
      el.classList.remove("memo-item-5");
    });
    this.CarouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`memo-item-${i + 1}`);
    });
  }

  setCurrentState() {
    // Pindahkan elemen terakhir ke depan untuk membuat efek slide
    this.CarouselArray.push(this.CarouselArray.shift());
    this.updatememo();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.setCurrentState();
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}

const exampleCarousel = new Carousel(memocontainer, memoitem);

exampleCarousel.startAutoSlide(); // Memulai slide otomatis
