import { Component, ViewEncapsulation, Input, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'List, nzm-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class List {
  defaultProps: any = {
    prefixCls: 'am-list'
  };

  renderHeaderType: string = '';
  renderFooterType: string = '';

  private _renderHeader: any = '';
  private _renderFooter: any = '';
  private _className: string = '';

  @Input()
  set className(value) {
    this._className = value;
  }
  @Input()
  get renderHeader() {
    return this._renderHeader;
  }
  set renderHeader(value: string | Function | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.renderHeaderType = 'templateRef';
    } else {
      this.renderHeaderType = typeof value;
    }
    console.log('this isi rend', this.renderHeaderType);

    this._renderHeader = value;
  }
  @Input()
  get renderFooter() {
    return this._renderFooter;
  }
  set renderFooter(value: string | Function | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.renderFooterType = 'templateRef';
    } else {
      this.renderFooterType = typeof value;
    }

    this._renderFooter = value;
  }

  @HostBinding('class')
  get hostClassName(): string {
    return 'am-list ' + this._className;
  }

  constructor() {}
}
