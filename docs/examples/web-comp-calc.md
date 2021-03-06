---
id: web-comp-calc
title: Web Components Calculator
sidebar_label: Web Components Calculator
slug: web-comp-calc
---

<div>
<iframe src="https://codesandbox.io/embed/fervent-elion-isq29?fontsize=14&hidenavigation=1&theme=dark"
  style={{ width:'100%', height: '600px', border:'0', borderRadius: '4px', overflow: 'hidden'}}
  title="fervent-elion-isq29"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />
</div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Calculator Example</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=VT323&display=swap"
      rel="stylesheet"
    />
    <style>
      ecs-calculator {
        width: 160px;
        display: grid;
        grid-template-rows: repeat(6, 40px);
        grid-template-columns: repeat(4, 40px);
        gap: 1px;
        overflow: hidden;
        border-radius: 6px;
      }

      number-btn,
      operator-btn,
      equals-btn,
      clear-btn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: "Roboto Mono", monospace;
      }

      calc-screen {
        padding: 4px;
        grid-column-start: 1;
        grid-column-end: 5;
        background-color: silver;
        font-family: "VT323", monospace;
        font-size: 30px;
        overflow: hidden;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      clear-btn {
        font-size: 13px;
        background-color: rgb(124, 124, 124);
      }

      number-btn {
        background-color: rgb(100, 100, 100);
      }

      operator-btn {
        background-color: rgb(224, 144, 24);
      }

      equals-btn {
        grid-column-start: 3;
        grid-column-end: 5;
        background-color: rgb(31, 31, 31);
      }

      clear-btn {
        grid-column-start: 1;
        grid-column-end: 4;
      }
    </style>
  </head>
  <body>
    <h1>DOM Calculator Example</h1>

    <div>
      <ecs-calculator>
        <calc-screen></calc-screen>

        <clear-btn>CLEAR</clear-btn>
        <operator-btn>/</operator-btn>

        <number-btn>7</number-btn>
        <number-btn>8</number-btn>
        <number-btn>9</number-btn>
        <operator-btn>*</operator-btn>

        <number-btn>4</number-btn>
        <number-btn>5</number-btn>
        <number-btn>6</number-btn>
        <operator-btn>-</operator-btn>

        <number-btn>1</number-btn>
        <number-btn>2</number-btn>
        <number-btn>3</number-btn>
        <operator-btn>+</operator-btn>

        <number-btn>0</number-btn>
        <number-btn>.</number-btn>

        <equals-btn>=</equals-btn>
      </ecs-calculator>
    </div>

    <script
      type="module"
      src="https://unpkg.com/@brochington/ecstatic@0.2.0"
    ></script>
    <script type="module">
      /* World */

      const { World } = ecstatic;
      const world = new World();

      /* Components */

      class ECSCalculator extends HTMLElement {
        constructor() {
          super();

          this.currentValue = "";
          this.currentTotal = "";
          this.algo = [];

          this.calculatorEntity = world.createEntity().add(this);
        }
      }

      class CalcBtn extends HTMLElement {
        constructor() {
          super();
          this.addEventListener("click", () => {
            const { calculatorEntity } = this.closest("ecs-calculator");

            calculatorEntity.add(this);

            world.systems.run();
          });
        }
      }

      class CalcScreen extends HTMLElement {
        constructor() {
          super();
          const { calculatorEntity } = this.closest("ecs-calculator");

          calculatorEntity.add(this);
        }
      }

      class NumberBtn extends CalcBtn {}

      class OperatorBtn extends CalcBtn {}

      class EqualsBtn extends CalcBtn {}

      class ClearBtn extends CalcBtn {}

      /* Define Components as Custom Elements */

      customElements.define("ecs-calculator", ECSCalculator);
      customElements.define("calc-screen", CalcScreen);
      customElements.define("number-btn", NumberBtn);
      customElements.define("operator-btn", OperatorBtn);
      customElements.define("equals-btn", EqualsBtn);
      customElements.define("clear-btn", ClearBtn);

      /* Systems */

      function accumulateNumber({ entity, components }) {
        const calcComp = components.get(ECSCalculator);
        const numComp = components.get(NumberBtn);

        calcComp.currentValue += numComp.innerText;

        entity.remove(NumberBtn);
      }

      world.addSystem([ECSCalculator, NumberBtn], accumulateNumber);

      //

      function accumulateOperator({ entity, components }) {
        const calcComp = components.get(ECSCalculator);
        const operatorComp = components.get(OperatorBtn);

        calcComp.algo.push(calcComp.currentValue);
        calcComp.algo.push(operatorComp.innerText);

        calcComp.currentValue = "";

        entity.remove(OperatorBtn);
      }

      world.addSystem([ECSCalculator, OperatorBtn], accumulateOperator);

      //

      function computeValue({ entity, components }) {
        const calcComp = components.get(ECSCalculator);

        calcComp.algo.push(calcComp.currentValue);

        const algoString = calcComp.algo.join(" ");

        const total = +eval(algoString).toFixed(6);
        calcComp.currentTotal = total;
        calcComp.currentValue = total;

        entity.remove(EqualsBtn);
      }

      world.addSystem([ECSCalculator, EqualsBtn], computeValue);

      //

      function clearComputation({ entity, components }) {
        const calcComp = components.get(ECSCalculator);

        calcComp.currentValue = "";
        calcComp.currentTotal = "";
        calcComp.algo = [];

        entity.remove(ClearBtn);
      }

      world.addSystem([ECSCalculator, ClearBtn], clearComputation);

      //

      function renderScreen({ components }) {
        const calcComp = components.get(ECSCalculator);
        const screenComp = components.get(CalcScreen);

        screenComp.innerText = calcComp.currentValue;
      }

      world.addSystem([ECSCalculator, CalcScreen], renderScreen);
    </script>
  </body>
</html>
```