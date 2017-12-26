import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>
  private imgURL = 'http://placehold.it/320x150'
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，学习angular入门时候创建的",["电子产品","硬件设备"]),
      new Product(2,"第一个商品",3.99,4.5,"这是第二个商品，学习angular入门时候创建的",["硬件设备"]),
      new Product(3,"第一个商品",1.99,1.5,"这是第三个商品，学习angular入门时候创建的",["电子产品","硬件设备"]),
      new Product(4,"第一个商品",9.99,2.5,"这是第四个商品，学习angular入门时候创建的",["硬件设备"]),
      new Product(5,"第一个商品",2.99,3.5,"这是第五个商品，学习angular入门时候创建的",["电子产品","硬件设备"]),
      new Product(6,"第一个商品",4.99,2.5,"这是第六个商品，学习angular入门时候创建的",["硬件设备"])
    ]

    this.products.push(new Product(6,"第七个商品",4.99,2.5,"这是第六个商品，学习angular入门时候创建的",["硬件设备"]))
  }

}


export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categeries:Array<string>,
  ){

  }
}