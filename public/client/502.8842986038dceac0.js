"use strict";(self.webpackChunkfood_commerce=self.webpackChunkfood_commerce||[]).push([[502],{7502:(j,c,l)=>{l.r(c),l.d(c,{OrdersModule:()=>H});var _=l(1255),h=l(5812),g=l(553),t=l(8926),f=l(2051),x=l(5593),p=l(9862);let u=(()=>{class a{constructor(e){this._httpClient=e,this.appUrl=g.N.appUrl,this.endPoint="admin/order"}get(e){let n=new p.LE;return e&&Object.keys(e).forEach(r=>{e[r]&&(n=n.append(r,e[r]))}),this._httpClient.get(`${this.appUrl}/${this.endPoint}`,{params:n})}process(e){return this._httpClient.post(`${this.appUrl}/${this.endPoint}/process/${e}`,{})}finish(e){return this._httpClient.post(`${this.appUrl}/${this.endPoint}/finish/${e}`,{})}static#t=this.\u0275fac=function(n){return new(n||a)(t.LFG(p.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})();var T=l(6593),b=l(2425),d=l(2500),m=l(6814),v=l(4747),A=l(7626);const O=["formModal"],s=function(){return{"border-radius":"5px","background-color":"#e9e9e9","margin-bottom":"0px",height:"20px"}};function U(a,o){1&a&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"ngx-skeleton-loader",9),t.qZA(),t.TgZ(15,"td"),t._UZ(16,"ngx-skeleton-loader",9),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("theme",t.DdM(8,s)),t.xp6(2),t.Q6J("theme",t.DdM(9,s)),t.xp6(2),t.Q6J("theme",t.DdM(10,s)),t.xp6(2),t.Q6J("theme",t.DdM(11,s)),t.xp6(2),t.Q6J("theme",t.DdM(12,s)),t.xp6(2),t.Q6J("theme",t.DdM(13,s)),t.xp6(2),t.Q6J("theme",t.DdM(14,s)),t.xp6(2),t.Q6J("theme",t.DdM(15,s)))}const q=function(){return[1,2,3,4,5]};function w(a,o){1&a&&(t.ynx(0),t.YNc(1,U,17,16,"tr",8),t.BQk()),2&a&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,q)))}function C(a,o){1&a&&(t.TgZ(0,"label",19),t._uU(1,"Pending"),t.qZA())}function N(a,o){1&a&&(t.TgZ(0,"label",20),t._uU(1,"Proses"),t.qZA())}function k(a,o){1&a&&(t.TgZ(0,"label",21),t._uU(1,"Selesai"),t.qZA())}function D(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"a",23),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2).$implicit,i=t.oxw(2);return t.KtG(i.process(r.id_pesanan))}),t._UZ(1,"i",28),t.TgZ(2,"span",25),t._uU(3,"Proses Pesanan"),t.qZA()()}}function M(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"a",29),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2).$implicit,i=t.oxw(2);return t.KtG(i.finish(r.id_pesanan))}),t._UZ(1,"i",30),t.TgZ(2,"span",25),t._uU(3,"Selesaikan Pesanan"),t.qZA()()}}function P(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",22)(1,"a",23),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.viewData(r))}),t._UZ(2,"i",24),t.TgZ(3,"span",25),t._uU(4,"Lihat Pesanan"),t.qZA()(),t.YNc(5,D,4,0,"a",26),t.YNc(6,M,4,0,"a",27),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.xp6(5),t.Q6J("ngIf","PENDING"==e.status),t.xp6(1),t.Q6J("ngIf","PROCESS"==e.status)}}function J(a,o){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",10),t._uU(10),t.ALo(11,"rupiah"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t.YNc(15,C,2,0,"label",11),t.YNc(16,N,2,0,"label",12),t.YNc(17,k,2,0,"label",13),t.qZA(),t.TgZ(18,"td")(19,"ul",14)(20,"li",15)(21,"a",16),t._UZ(22,"i",17),t.qZA(),t.YNc(23,P,7,2,"div",18),t.qZA()()()()),2&a){const e=o.$implicit,n=o.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.id_pesanan),t.xp6(2),t.Oqu(e.nama_pelanggan),t.xp6(2),t.Oqu(e.nomor_hp),t.xp6(2),t.Oqu(t.lcZ(11,9,e.total)),t.xp6(3),t.Oqu(e.tanggal_pesanan),t.xp6(2),t.Q6J("ngIf","PENDING"==e.status),t.xp6(1),t.Q6J("ngIf","PROCESS"==e.status),t.xp6(1),t.Q6J("ngIf","FINISH"==e.status)}}function S(a,o){if(1&a&&(t.ynx(0),t.YNc(1,J,24,11,"tr",8),t.BQk()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.orders)}}function Q(a,o){1&a&&(t.TgZ(0,"label",19),t._uU(1,"Pending"),t.qZA())}function I(a,o){1&a&&(t.TgZ(0,"label",20),t._uU(1,"Proses"),t.qZA())}function y(a,o){1&a&&(t.TgZ(0,"label",21),t._uU(1,"Selesai"),t.qZA())}function F(a,o){if(1&a&&(t.TgZ(0,"tr")(1,"td",47),t._UZ(2,"img",48),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",10),t._uU(8),t.ALo(9,"rupiah"),t.qZA()()),2&a){const e=o.$implicit,n=t.oxw(2);t.xp6(2),t.Q6J("src",n.webUrl+"/storage/"+e.gambar_produk,t.LSH),t.xp6(2),t.Oqu(e.nama_produk),t.xp6(2),t.hij("x",e.kuantitas_produk,""),t.xp6(2),t.hij("",t.lcZ(9,4,e.total)," ")}}const Y=function(){return[]};function E(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",31)(1,"h3",25),t._uU(2),t.qZA(),t.TgZ(3,"div",32),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeForm())}),t._UZ(4,"i",33),t.qZA()(),t.TgZ(5,"div",34)(6,"div",35)(7,"div",36)(8,"div",35)(9,"div",36)(10,"label",37),t._uU(11,"Nomor Pesanan:"),t.qZA(),t.TgZ(12,"div",38),t._uU(13),t.YNc(14,Q,2,0,"label",11),t.YNc(15,I,2,0,"label",12),t.YNc(16,y,2,0,"label",13),t.qZA()(),t.TgZ(17,"div",36)(18,"label",37),t._uU(19,"Tanggal Pesan:"),t.qZA(),t.TgZ(20,"div",38),t._uU(21),t.qZA()()(),t.TgZ(22,"div",35)(23,"div",36)(24,"label",37),t._uU(25,"Nama Pelanggan:"),t.qZA(),t.TgZ(26,"div",38),t._uU(27),t.qZA()(),t.TgZ(28,"div",36)(29,"label",37),t._uU(30,"Nomor Hp:"),t.qZA(),t.TgZ(31,"div",38),t._uU(32),t.qZA()()(),t.TgZ(33,"div",35)(34,"div",36)(35,"label",37),t._uU(36,"Alamat:"),t.qZA(),t.TgZ(37,"div",38),t._uU(38),t.qZA()(),t.TgZ(39,"div",36)(40,"label",37),t._uU(41,"Email:"),t.qZA(),t.TgZ(42,"div",38),t._uU(43),t.qZA()()()(),t.TgZ(44,"div",36)(45,"h4",39),t._uU(46,"Pesanan"),t.qZA(),t.TgZ(47,"table",40)(48,"thead")(49,"tr")(50,"th",41),t._uU(51,"Nama"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Jumlah"),t.qZA(),t.TgZ(54,"th",10),t._uU(55,"Harga"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,F,10,6,"tr",8),t.qZA(),t.TgZ(58,"tfoot")(59,"tr"),t._UZ(60,"td",42),t.qZA(),t.TgZ(61,"tr")(62,"td",43),t._uU(63,"Total Harga"),t.qZA(),t.TgZ(64,"td",10),t._uU(65),t.ALo(66,"rupiah"),t.qZA()()()()()(),t.TgZ(67,"div",44)(68,"button",45),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeForm())}),t._UZ(69,"i",46),t._uU(70,"Kembali "),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(2),t.Oqu(e.detailTitle),t.xp6(11),t.hij(" ",null==e.dataOrder?null:e.dataOrder.id_pesanan," "),t.xp6(1),t.Q6J("ngIf","PENDING"==(null==e.dataOrder?null:e.dataOrder.status)),t.xp6(1),t.Q6J("ngIf","PROCESS"==(null==e.dataOrder?null:e.dataOrder.status)),t.xp6(1),t.Q6J("ngIf","FINISH"==(null==e.dataOrder?null:e.dataOrder.status)),t.xp6(5),t.Oqu(null==e.dataOrder?null:e.dataOrder.tanggal_pesanan),t.xp6(6),t.Oqu(null==e.dataOrder?null:e.dataOrder.nama_pelanggan),t.xp6(5),t.Oqu(null==e.dataOrder?null:e.dataOrder.nomor_hp),t.xp6(6),t.Oqu(null==e.dataOrder?null:e.dataOrder.alamat),t.xp6(5),t.Oqu(null==e.dataOrder?null:e.dataOrder.email),t.xp6(14),t.Q6J("ngForOf",e.orderDetail||t.DdM(14,Y)),t.xp6(8),t.hij("",t.lcZ(66,12,e.dataOrder.total)," ")}}const G=[{path:"",component:(()=>{class a{constructor(e,n,r,i,$){this._bsModalService=e,this._modalService=n,this._orderService=r,this._title=i,this._toastrService=$,this._title.setTitle("Pesanan | Admin Console"),this.orders=[],this.editMode=!1,this.isSubmitting=!1,this.webUrl=g.N.webUrl}ngOnInit(){this.loadData()}loadData(){this.loadingData=!0,this._orderService.get().subscribe({next:e=>{this.loadingData=!1,this.orders=e},error:e=>{this.loadingData=!1;let n="Gagal memuat data";e.error&&e.error.message&&(n=e.error.message),this._toastrService.error(n,"Error")}})}clearForm(){this.dataOrder={alamat:null,email:null,id_pesanan:null,nama_pelanggan:null,nomor_hp:null,status:null,tanggal_pesanan:null,total:null},this.orderDetail=[]}clearFormValidation(){this.formValidation={name:{valid:!0,message:null},unit_id:{valid:!0,message:null},price:{valid:!0,message:null}}}viewData(e){this.detailTitle="Lihat Data Pesanan",this.dataOrder={...e},this.orderDetail=[...e.detail],this._openform()}_openform(){this.clearFormValidation(),this.bsModalRef=this._bsModalService.show(this.formModal,{class:"modal-xl",ignoreBackdropClick:!0})}closeForm(){this.bsModalRef?.hide()}process(e){this._orderService.process(e).subscribe({next:n=>{this.loadData()},error:n=>{let r="Gagal memproses data";n.error&&n.error.message&&(r=n.error.message),this._toastrService.error(r,"Error")}})}finish(e){this._orderService.finish(e).subscribe({next:n=>{this.loadData()},error:n=>{let r="Gagal memproses data";n.error&&n.error.message&&(r=n.error.message),this._toastrService.error(r,"Error")}})}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(f.tT),t.Y36(x.Z),t.Y36(u),t.Y36(T.Dx),t.Y36(b._W))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],viewQuery:function(n,r){if(1&n&&t.Gf(O,5),2&n){let i;t.iGM(i=t.CRH())&&(r.formModal=i.first)}},decls:29,vars:2,consts:[[1,"card","shadow"],[1,"card-body"],[1,"mb-4"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[4,"ngIf"],["formModal",""],[4,"ngFor","ngForOf"],[3,"theme"],[1,"text-end"],["class","badge badge-warning",4,"ngIf"],["class","badge badge-primary",4,"ngIf"],["class","badge badge-success",4,"ngIf"],[1,"navbar-nav","navbar-nav-right"],["dropdown","",1,"nav-item","nav-profile","dropdown"],["dropdownToggle","","href","javascript:void(0)","id","profileDropdown",1,"nav-link"],[1,"px-3","fa-light","fa-ellipsis-stroke-vertical"],["class","dropdown-menu dropdown-menu-right navbar-dropdown position-absolute border-0 shadow rounded","aria-labelledby","profileDropdown",4,"dropdownMenu"],[1,"badge","badge-warning"],[1,"badge","badge-primary"],[1,"badge","badge-success"],["aria-labelledby","profileDropdown",1,"dropdown-menu","dropdown-menu-right","navbar-dropdown","position-absolute","border-0","shadow","rounded"],["role","button",1,"dropdown-item","text-primary",3,"click"],[1,"me-2","fa-regular","fa-eye"],[1,"fw-bold"],["role","button","class","dropdown-item text-primary",3,"click",4,"ngIf"],["role","button","class","dropdown-item text-success",3,"click",4,"ngIf"],[1,"me-2","fa-regular","fa-utensils"],["role","button",1,"dropdown-item","text-success",3,"click"],[1,"me-2","fa-regular","fa-check"],[1,"modal-header","border-0"],["role","button",1,"ms-auto",3,"click"],[1,"fa-regular","fa-circle-xmark","fa-xl","text-black"],[1,"modal-body","pt-0"],[1,"row"],[1,"col-md-6"],[1,"mb-0","small"],[1,"mb-2","fw-bold"],[1,"mb-3","fw-bold"],[1,"table","table-sm"],["colspan","2"],["colspan","4"],["colspan","3",1,"text-end","fw-bold"],[1,"mt-4","d-flex","justify-content-end"],["type","button",1,"btn","btn-sm","btn-inverse-dark","shadow-sm",3,"click"],[1,"me-2","fa-regular","fa-rotate-left"],[2,"width","76px"],[1,"rounded",2,"height","70px","width","70px",3,"src"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Pesanan"),t.qZA(),t.TgZ(4,"div",3)(5,"table",4)(6,"thead")(7,"tr")(8,"th"),t._uU(9,"No."),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Nomor Pesanan"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Nama Pelanggan"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Nomor HP"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Total"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Tanggal Pesan"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th",5),t._uU(23,"Aksi"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,w,2,2,"ng-container",6),t.YNc(26,S,2,1,"ng-container",6),t.qZA()()()()(),t.YNc(27,E,71,15,"ng-template",null,7,t.W1O)),2&n&&(t.xp6(25),t.Q6J("ngIf",r.loadingData),t.xp6(1),t.Q6J("ngIf",!r.loadingData))},dependencies:[d.Hz,d.Mq,d.TO,m.sg,m.O5,v.xr,A._],encapsulation:2})}return a})()}];let H=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({providers:[u],imports:[_.Bz.forChild(G),h.m,_.Bz]})}return a})()}}]);