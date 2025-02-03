class Slider {
  #$sliderWrap: HTMLUListElement;
  #sliderWidth: number;
  #itemCount: number;
  #currentItem: number;
  #$pagination: HTMLDivElement;
  #intervalId: number | null;

  constructor(private $slider: HTMLDivElement) {
    this.#$sliderWrap = this.$slider.querySelector('.slider-wrap')!;
    this.#sliderWidth = this.#getSliderWidth();
    this.#itemCount = this.#getItemCount();
    this.#currentItem = 0;
    this.#$pagination = this.#setPagination();
    this.#intervalId = null;

    this.#init();
  }

  #init = () => {
    this.#addScrollbarListener();
    this.#setNavigation();
    this.#updatePagination(0);
    this.#play();
    window.addEventListener('resize', this.#onResizeWindow);
  };

  #addScrollbarListener = () => {
    let hasScrollbar = false;
    const id = setInterval(() => {
      if (checkScrollbar()) hasScrollbar = true;
      if (hasScrollbar) {
        this.#onResizeWindow();
        clearInterval(id);
      }
    }, 100);
  };

  #play = () =>
    (this.#intervalId = window.setInterval(this.#updateCurrentItem, 3000));

  pause = () => clearInterval(this.#intervalId!);

  #onResizeWindow = () => {
    this.#sliderWidth = this.#getSliderWidth();
    this.#renderUpdate();
  };

  #updateCurrentItem = (index?: number) => {
    this.#currentItem = index ?? (this.#currentItem + 1) % this.#itemCount;
    this.#renderUpdate();
    this.#updatePagination(this.#currentItem);
  };

  #renderUpdate = () => {
    const x = this.#currentItem * this.#sliderWidth;
    this.#$sliderWrap.style.transform = `translateX(-${x}px)`;
  };

  #setPagination = () => {
    const $pagination = document.createElement('div');
    $pagination.className = 'slider-pagination';
    Array(this.#itemCount)
      .fill(0)
      .forEach((_, i) => {
        const $btn = document.createElement('button');
        $btn.dataset.index = i.toString();
        $btn.addEventListener('click', () => this.#onClickPagination(i));
        $pagination.appendChild($btn);
      });
    this.$slider.appendChild($pagination);
    return $pagination;
  };

  #updatePagination = (index: number) => {
    this.#$pagination.querySelectorAll('button').forEach((btn) => {
      btn.classList.remove('active');
      if (btn.dataset.index === index.toString()) btn.classList.add('active');
    });
  };

  #onClickPagination = (index: number) => {
    if (this.#currentItem === index) return;
    this.pause();
    this.#updateCurrentItem(index);
    setTimeout(this.#play, 1000);
  };

  #setNavigation = () => {
    const $navigation = document.createElement('div');

    const $prevBtn = document.createElement('button');
    const $nextBtn = document.createElement('button');
    $prevBtn.className = 'prev-btn slider-navigation-btn';
    $nextBtn.className = 'next-btn slider-navigation-btn';
    $prevBtn.dataset.direction = 'prev';
    $nextBtn.dataset.direction = 'next';

    $navigation.appendChild($prevBtn);
    $navigation.appendChild($nextBtn);

    $navigation.addEventListener('click', (e) => {
      const t = e.target as HTMLElement;
      const { direction } = t.dataset;
      if (direction) {
        this.#onClickNavigation(direction as 'prev' | 'next');
      }
    });
    this.$slider.appendChild($navigation);
  };

  #onClickNavigation = (direction: 'prev' | 'next') => {
    this.pause();
    if (direction === 'next') {
      this.#updateCurrentItem();
    } else {
      const prevItem =
        (this.#currentItem - 1 + this.#itemCount) % this.#itemCount;
      this.#updateCurrentItem(prevItem);
    }
    setTimeout(this.#play, 1000);
  };

  #getSliderWidth = () => this.$slider.offsetWidth;

  #getItemCount = () => this.$slider.querySelectorAll('.slider-item').length;
}

export default Slider;

function checkScrollbar() {
  return window.innerWidth > document.documentElement.clientWidth;
}
