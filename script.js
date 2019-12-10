const refs = {
    body: document.body,
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]')
  };
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];
  
  const colorSwitch = {
    flag: false,
    int: 0,
    changeColor() {
      this.flag = true;
      const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.style.backgroundColor = randomColor;
    },
    startRender() {
      if (this.flag) {
        return;
      }
  
      this.int = setInterval(() => {
        this.changeColor();
      }, 1000);
    },
    stopRender() {
      this.flag = false;
      clearInterval(this.int);
    }
  };
  
  refs.btnStart.addEventListener(
    "click",
    colorSwitch.startRender.bind(colorSwitch)
  );
  refs.btnStop.addEventListener(
    "click",
    colorSwitch.stopRender.bind(colorSwitch)
  );