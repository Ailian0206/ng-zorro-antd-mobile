import { Component } from '@angular/core';

@Component({
  selector: 'demo-grid-basic',
  template: `
    <div class="sub-title">Always square grid item </div>
    <Grid [activeStyle]="false" [data]="data" (OnClick)="click($event)"></Grid>
    <br>
    <Grid [activeStyle]="false" [data]="dataList" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Grid item adjust accroiding to img size </div>
    <Grid class="not-square-grid" [data]="data" [square]="false" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">ColumnNum=3 </div>
    <Grid [data]="data" [columnNum]="3" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">No border </div>
    <Grid [data]="data" [hasLine]="false" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Carousel</div>
    <Grid [data]="data" [isCarousel]="true" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">Custom content</div>
    <Grid [data]="data" [columnNum]="3" [itemStyle]="{ height: '150px', background: 'rgba(0,0,0,.05)' }" (OnClick)="click($event)"></Grid>
    <br>
    <div class="sub-title">ng-content</div>
    <Grid>
      <Flex *ngFor="let item of gridData; let i = index" [justify]="'center'" [align]="'stretch'">
        <FlexItem *ngFor="let subItem of item; let j = index">
          <div *ngIf="subItem !== null" class="am-grid-item-content" (click)="click(subItem, i * columnNum + j)">
            <div class="am-grid-item-inner-content column-num-{{ columnNum }}">
              <img src="{{ subItem.icon }}" class="am-grid-icon" />
              <div class="am-grid-text">{{ subItem.text }}</div>
            </div>
          </div>
          <div *ngIf="subItem === null" class="am-grid-null-item"></div>
        </FlexItem>
      </Flex>
    </Grid>

  `,
  styles: [
    `
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 15px 0 9px 15px;
      }
      /deep/.not-square-grid .am-grid-icon {
        width: 40px;
        height: 60px;
      }
    `
  ]
})
export class DemoGridBasicComponent {
  gridData = [];
  data = Array.from(new Array(9)).map((_val, i) => ({
    icon: '/assets/img/icon.svg',
    text: `name${i}`
  }));

  data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
  }));

  dataList = Array.from(new Array(9)).map((_val, i) => ({
    icon: `<img src="/assets/img/icon.svg" style="width:36px"/>`,
    text: `name${i}`
  }));

  click(event) {
    console.log(event);
  }

  constructor() {
    this.init();
  }

  init() {
    const dataLength = (this.data && this.data.length) || 0;
    let rowCount = Math.ceil(dataLength / 3);
    this.gridData = this.getRows(rowCount, dataLength);
  }

  getRows(rowCount: number, dataLength: number) {
    const columnNum = 3;
    const rowArr = new Array();
    for (let i = 0; i < rowCount; i++) {
      rowArr[i] = new Array();
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          rowArr[i][j] = this.data[dataIndex];
        } else {
          rowArr[i][j] = null;
        }
      }
    }
    return rowArr;
  }
}