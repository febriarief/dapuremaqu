"use strict";(self.webpackChunkfood_commerce=self.webpackChunkfood_commerce||[]).push([[31],{3031:(A,d,n)=>{n.r(d),n.d(d,{CartModule:()=>M});var l=n(1255),h=n(553),t=n(8926),f=n(9862);let g=(()=>{class r{constructor(e){this._httpClient=e,this.appUrl=h.N.appUrl}checkout(e){return this._httpClient.post(`${this.appUrl}/checkout`,e)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(f.eN))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac})}return r})();var v=n(5115),_=n(6593),C=n(2425),p=n(6814),m=n(95),Z=n(7626);function b(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",11)(2,"div",29)(3,"div",30)(4,"div"),t._UZ(5,"img",31),t.qZA(),t.TgZ(6,"div",32)(7,"h5"),t._uU(8),t.qZA()()(),t.TgZ(9,"div",30)(10,"div",33)(11,"h5",34),t._uU(12),t.qZA()(),t.TgZ(13,"div",35),t._uU(14),t.ALo(15,"rupiah"),t.qZA(),t.TgZ(16,"a",36),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.deleteItem(s.id_produk))}),t._UZ(17,"i",37),t.qZA()()()()()}if(2&r){const e=c.$implicit,o=t.oxw();t.xp6(5),t.Q6J("src",o.webUrl+"/storage/"+e.gambar,t.LSH),t.xp6(3),t.Oqu(e.nama_produk),t.xp6(4),t.hij("x",e.qty,""),t.xp6(2),t.hij(" ",t.lcZ(15,4,e.harga*e.qty)," ")}}function T(r,c){1&r&&(t.ynx(0),t._UZ(1,"span",38),t._uU(2," memproses pesanan... "),t.BQk())}function x(r,c){1&r&&(t.ynx(0),t._uU(1," Proses Pesanan "),t.BQk())}let u=(()=>{class r{constructor(e,o,a,s,i){this._cartService=e,this._headerService=o,this._router=a,this._title=s,this._toastrService=i,s.setTitle("Keranjang | Dapuremaqu"),this.carts=[],this.webUrl=h.N.webUrl,this.total=0}ngOnInit(){this.clearForm(),this._getCartItem()}clearForm(){this.form={nama_pelanggan:null,alamat:null,nomor_hp:null,email:null,products:[]}}_getCartItem(){const e=localStorage.getItem("carts");e&&(this.carts=JSON.parse(e)),this.form.products=this.carts,this.hitungTotalHarga()}deleteItem(e){const o=this.carts.findIndex(a=>a.id_produk===e);if(-1!==o){this.carts.splice(o,1),localStorage.setItem("carts",JSON.stringify(this.carts)),this.form.products=this.carts;const a=this.carts.reduce((s,i)=>s+i.qty,0);this._headerService.updateCart(a),this.hitungTotalHarga()}}hitungTotalHarga(){let e=0;this.carts.forEach(o=>{e+=o.harga*o.qty}),this.total=e}_validate(){return this.form.nama_pelanggan?this.form.alamat?this.form.nomor_hp&&this.form.email?0!=this.form.products.length||(this._toastrService.error("Minimal harus ada 1 data produk"),!1):(this._toastrService.error("Kolom isian nomor hp tidak boleh kosong"),!1):(this._toastrService.error("Kolom isian alamat tidak boleh kosong"),!1):(this._toastrService.error("Kolom isian nama tidak boleh kosong"),!1)}checkout(){this.isSubmitting||!this._validate()||(this.isSubmitting=!0,this._cartService.checkout(this.form).subscribe({next:e=>{this.isSubmitting=!1,localStorage.removeItem("carts"),this._headerService.updateCart(0),setTimeout(()=>this._router.navigate(["/order",e.order_id]),600)},error:e=>{this.isSubmitting=!1;let o="Gagal memproses pesanan";e.error&&e.error.message&&(o=e.error.message),this._toastrService.error(o,"Error")}}))}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g),t.Y36(v.r),t.Y36(l.F0),t.Y36(_.Dx),t.Y36(C._W))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["client-cart"]],decls:40,vars:11,consts:[[1,"h-100","h-custom",2,"background-color","#eee"],[1,"container","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col"],[1,"card"],[1,"card-body","p-4"],[1,"row"],[1,"col-lg-7"],["class","card mb-3",4,"ngFor","ngForOf"],[1,"col-lg-5"],[1,"card","bg-primary","text-white","rounded-3"],[1,"card-body"],[1,"mb-0","text-light"],[1,"mt-4","form-outline","form-white","mb-4"],["for","name",1,"form-label"],["type","text","id","name","name","nama_pelanggan","placeholder","nama",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"form-outline","form-white","mb-4"],["for","address",1,"form-label"],["id","address","name","alamat","placeholder","alamat",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["for","phone",1,"form-label"],["type","text","id","phone","name","nomor_hp","placeholder","nomor hp",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["for","email",1,"form-label"],["type","text","id","email","name","email","placeholder","email",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"my-4"],[1,"d-flex","justify-content-between","mb-4"],[1,"mb-2"],["type","button",1,"btn","btn-info","btn-block","btn-lg",3,"disabled","click"],[4,"ngIf"],[1,"card","mb-3"],[1,"d-flex","justify-content-between"],[1,"d-flex","flex-row","align-items-center"],["alt","Shopping item",1,"img-fluid","rounded-3",2,"width","65px",3,"src"],[1,"ms-3"],[2,"width","50px"],[1,"fw-normal","mb-0"],[2,"width","80px"],["href","javascript:void(0)",3,"click"],[1,"text-danger","fas","fa-trash-alt"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"]],template:function(o,a){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),t.YNc(8,b,18,6,"div",8),t.qZA(),t.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"h5",12),t._uU(13,"Detil Pesanan"),t.qZA(),t.TgZ(14,"div",13)(15,"label",14),t._uU(16,"Nama"),t.qZA(),t.TgZ(17,"input",15),t.NdJ("ngModelChange",function(i){return a.form.nama_pelanggan=i}),t.qZA()(),t.TgZ(18,"div",16)(19,"label",17),t._uU(20,"Alamat"),t.qZA(),t.TgZ(21,"textarea",18),t.NdJ("ngModelChange",function(i){return a.form.alamat=i}),t.qZA()(),t.TgZ(22,"div",16)(23,"label",19),t._uU(24,"Nomor HP"),t.qZA(),t.TgZ(25,"input",20),t.NdJ("ngModelChange",function(i){return a.form.nomor_hp=i}),t.qZA()(),t.TgZ(26,"div",16)(27,"label",21),t._uU(28,"Email"),t.qZA(),t.TgZ(29,"input",22),t.NdJ("ngModelChange",function(i){return a.form.email=i}),t.qZA()(),t._UZ(30,"hr",23),t.TgZ(31,"div",24)(32,"p",25),t._uU(33,"Total"),t.qZA(),t.TgZ(34,"p",25),t._uU(35),t.ALo(36,"rupiah"),t.qZA()(),t.TgZ(37,"button",26),t.NdJ("click",function(){return a.checkout()}),t.YNc(38,T,3,0,"ng-container",27),t.YNc(39,x,2,0,"ng-container",27),t.qZA()()()()()()()()()()()),2&o&&(t.xp6(8),t.Q6J("ngForOf",a.carts),t.xp6(9),t.Q6J("ngModel",a.form.nama_pelanggan),t.xp6(4),t.Q6J("ngModel",a.form.alamat),t.xp6(4),t.Q6J("ngModel",a.form.nomor_hp),t.xp6(4),t.Q6J("ngModel",a.form.email),t.xp6(6),t.Oqu(t.lcZ(36,9,a.total)),t.xp6(2),t.Q6J("disabled",a.isSubmitting),t.xp6(1),t.Q6J("ngIf",a.isSubmitting),t.xp6(1),t.Q6J("ngIf",!a.isSubmitting))},dependencies:[p.sg,p.O5,m.Fj,m.JJ,m.On,Z._],encapsulation:2})}return r})();var S=n(3366);const y=[{path:"",component:u}];let M=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({providers:[g],imports:[l.Bz.forChild(y),S.m,l.Bz]})}return r})()}}]);