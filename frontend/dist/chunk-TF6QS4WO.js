import{c as Z,d as Se,h as Re}from"./chunk-JABGY4LQ.js";import{Aa as fe,Ab as we,C as J,Ca as l,Cd as xe,D as P,Da as M,E as b,Ed as _e,F as h,G as u,Gd as Oe,I as C,Id as ye,J as v,Jd as Q,N as O,O as y,T as le,Tb as N,Vb as I,W as a,Wb as m,Xb as B,Yb as L,a as ne,aa as de,ac as V,ba as w,c as A,cb as ge,cc as T,d as re,dc as D,ec as z,g as F,ga as p,ja as S,nb as he,o as se,oa as r,ob as j,p as ae,pa as s,pb as k,pd as be,q as ce,qa as d,qd as Ce,rd as Pe,sb as ee,sc as G,sd as ve,t as _,ta as pe,tc as q,td as Me,ua as E,va as X,vc as H,wc as K,xb as Ee,xc as U,ya as ue,yc as W,za as me}from"./chunk-V5VONCA7.js";import"./chunk-E7QB6X72.js";import{a as oe}from"./chunk-MON7YFGF.js";var Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["app-auth"]],decls:3,vars:0,consts:[[1,"view"],[1,"rgba-stylish-strong"]],template:function(i,t){i&1&&(r(0,"div",0),d(1,"div",1),s(),d(2,"router-outlet"))},dependencies:[he],styles:[".view[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;background:url(/assets/images/bg-bsru.png) no-repeat center;background-size:cover;z-index:-100}.rgba-stylish-strong[_ngcontent-%COMP%]{inset:0;width:100%;height:100%;background-color:#3e455199;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}"]});let o=e;return o})();var te={patternPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,validationField:{email:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 E-mail",email:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 E-mail \u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (example@gmail.com)"},passwordResetCode:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 \u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",length:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A 8 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"},newPassword:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 New password",pattern:"\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E15\u0E31\u0E27\u0E40\u0E25\u0E47\u0E01, \u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48, \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02, \u0E2D\u0E31\u0E01\u0E29\u0E23\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32 8 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"},confirmPassword:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 Confirm password",match:"Password \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19"}}};var Ue=["stepper"];function We(o,e){o&1&&d(0,"mat-progress-bar",3)}function Qe(o,e){o&1&&l(0,"E-mail")}function Ze(o,e){o&1&&l(0,"\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19")}function $e(o,e){if(o&1&&(r(0,"mat-error"),l(1),s()),o&2){let g=X();a(),M(g.validationField.passwordResetCode.length)}}function Ye(o,e){if(o&1&&(r(0,"mat-error"),d(1,"app-error-field",12),s()),o&2){let g=X();a(),p("control",g.passwordResetCode)("errorMessage",g.validationField.passwordResetCode)}}function Je(o,e){o&1&&l(0,"\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19")}var je=(()=>{let e=class e{constructor(){this.formBuilder=u(z),this.authApiService=u(Q),this.validationService=u(Se),this.toastService=u(Oe),this.validationField=te.validationField,this.patternPassword=te.patternPassword,this.isLoading=!1,this.hideNewPassword=!0,this.hideConfirmPassword=!0,this.formEmail=this.initFormEmail(),this.formVerified=this.initFormVerified(),this.formResetPassword=this.initFormResetPassword()}onSubmitEmail(){if(this.formEmail.invalid)return;let n=this.formEmail.getRawValue().email;this.isLoading=!0,this.authApiService.forgetPassword(n).pipe(_(()=>this.isLoading=!1)).subscribe(i=>{this.id=i.id,this.stepper.next()})}onSubmitVerified(){this.formVerified.invalid||this.stepper.next()}onSubmitResetPassword(){if(this.formResetPassword.invalid)return;let n={passwordResetCode:this.formVerified.getRawValue().passwordResetCode,newPassword:this.formResetPassword.getRawValue().newPassword,confirmPassword:this.formResetPassword.getRawValue().confirmPassword};this.isLoading=!0,this.authApiService.resetPassword(this.id,n).pipe(ce(i=>(this.toastService.success("Success",i.message),this.authApiService.logout().pipe(ae(()=>F(null))))),_(()=>this.isLoading=!1)).subscribe()}get email(){return this.formEmail.controls.email}get passwordResetCode(){return this.formVerified.controls.passwordResetCode}get newPassword(){return this.formResetPassword.controls.newPassword}get confirmPassword(){return this.formResetPassword.controls.confirmPassword}initFormEmail(){return this.formBuilder.group({email:["",[m.required,m.email]]})}initFormVerified(){return this.formBuilder.nonNullable.group({passwordResetCode:["",[m.required,m.minLength(8),m.maxLength(8)]]})}initFormResetPassword(){return this.formBuilder.nonNullable.group({newPassword:["",[m.required,m.pattern(this.patternPassword)]],confirmPassword:[""]},{validators:this.validationService.comparePassword.bind(this,["newPassword","confirmPassword"])})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["app-forgot-password"]],viewQuery:function(i,t){if(i&1&&ue(Ue,5),i&2){let c;me(c=fe())&&(t.stepper=c.first)}},decls:63,vars:22,consts:[["stepper",""],[1,"forgot-wrapper"],[1,"forgot-box","dark-theme"],["mode","indeterminate"],["src","assets/images/logo-bsru.png","alt","logo"],[2,"margin-inline","-24px"],["labelPosition","bottom","linear","true"],[3,"stepControl"],[3,"ngSubmit","formGroup"],["matStepLabel",""],["matInput","","type","email","formControlName","email"],["matSuffix","","fontIcon","email"],[3,"control","errorMessage"],["type","submit","mat-button","",3,"disabled"],[3,"stepControl","editable","optional"],[3,"formGroup"],["matInput","","type","text","formControlName","passwordResetCode"],["mat-button","","matStepperPrevious",""],["mat-button","","matStepperNext",""],[3,"editable","optional"],["matInput","","formControlName","newPassword","autocomplete","off",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","confirmPassword","autocomplete","off",3,"type"],["type","submit","mat-button",""],[1,"login"],["routerLink","/login"]],template:function(i,t){if(i&1){let c=pe();r(0,"div",1)(1,"div",2),w(2,We,1,0,"mat-progress-bar",3),d(3,"img",4),r(4,"h1"),l(5,"\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ?"),s(),r(6,"div",5)(7,"mat-stepper",6,0)(9,"mat-step",7)(10,"form",8),E("ngSubmit",function(){return O(c),y(t.onSubmitEmail())}),w(11,Qe,1,0,"ng-template",9),r(12,"mat-form-field")(13,"mat-label"),l(14,"E-mail"),s(),d(15,"input",10)(16,"mat-icon",11),r(17,"mat-error"),d(18,"app-error-field",12),s()(),r(19,"div")(20,"button",13),l(21," \u0E16\u0E31\u0E14\u0E44\u0E1B "),s()()()(),r(22,"mat-step",14)(23,"form",15),w(24,Ze,1,0,"ng-template",9),r(25,"mat-form-field")(26,"mat-label"),l(27,"\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19"),s(),d(28,"input",16),w(29,$e,2,1,"mat-error")(30,Ye,2,2),s(),r(31,"div")(32,"button",17),l(33,"\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"),s(),r(34,"button",18),l(35,"\u0E16\u0E31\u0E14\u0E44\u0E1B"),s()()()(),r(36,"mat-step",19)(37,"form",8),E("ngSubmit",function(){return O(c),y(t.onSubmitResetPassword())}),w(38,Je,1,0,"ng-template",9),r(39,"mat-form-field")(40,"mat-label"),l(41,"\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48"),s(),d(42,"input",20),r(43,"mat-icon",21),E("click",function(){return O(c),y(t.hideNewPassword=!t.hideNewPassword)}),l(44),s(),r(45,"mat-error"),d(46,"app-error-field",12),s()(),r(47,"mat-form-field")(48,"mat-label"),l(49,"\u0E22\u0E34\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48"),s(),d(50,"input",22),r(51,"mat-icon",21),E("click",function(){return O(c),y(t.hideConfirmPassword=!t.hideConfirmPassword)}),l(52),s(),r(53,"mat-error"),d(54,"app-error-field",12),s()(),r(55,"div")(56,"button",17),l(57,"\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"),s(),r(58,"button",23),l(59,"\u0E15\u0E01\u0E25\u0E07"),s()()()()()(),r(60,"div",24)(61,"a",25),l(62,"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"),s()()()()}i&2&&(a(2),S(2,t.isLoading?2:-1),a(7),p("stepControl",t.formEmail),a(),p("formGroup",t.formEmail),a(8),p("control",t.email)("errorMessage",t.validationField.email),a(2),p("disabled",t.isLoading),a(2),p("stepControl",t.formVerified)("editable",!0)("optional",!1),a(),p("formGroup",t.formVerified),a(6),S(29,t.passwordResetCode.value.length!=0&&t.passwordResetCode.value.length!=8&&t.passwordResetCode.touched?29:30),a(7),p("editable",!1)("optional",!1),a(),p("formGroup",t.formResetPassword),a(5),p("type",t.hideNewPassword?"password":"text"),a(2),M(t.hideNewPassword?"visibility_off":"visibility"),a(2),p("control",t.newPassword)("errorMessage",t.validationField.newPassword),a(4),p("type",t.hideConfirmPassword?"password":"text"),a(2),M(t.hideConfirmPassword?"visibility_off":"visibility"),a(2),p("control",t.confirmPassword)("errorMessage",t.validationField.confirmPassword))},dependencies:[k,V,I,B,L,T,D,we,N,U,K,G,q,H,W,Ce,be,Pe,ve,Me,Z],styles:[".forgot-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100dvh;width:100dvw;padding:0 30px;box-sizing:border-box}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:15px;width:100%;max-width:400px;padding:40px 60px;background:#000000b3;border-radius:6px;box-shadow:5px 10px 20px #4e3515}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:-150px;left:calc(50% - 60px);width:120px}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;letter-spacing:1px;color:#f54831;font-weight:700}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:6px}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin-top:10px}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ffffffe6}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   mat-stepper[_ngcontent-%COMP%]{background:transparent}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{width:100%;font-size:1rem;text-align:right}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff9;cursor:pointer;transition:color .3s}.forgot-wrapper[_ngcontent-%COMP%]   .forgot-box[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff5722}.complete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding:10px;width:80px;height:80px;font-size:80px;border-radius:50%;border:5px solid #1cbd32}.complete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;color:#fff;font-size:20px}"]});let o=e;return o})();var ke=(o,e)=>{let g=u(j),i=u(ye).getAccessToken();return!i||i==="undefined"||i==="null"?!0:(g.navigate(["/"]),!1)};var Xe=new b("recaptcha-language"),et=new b("recaptcha-base-url"),tt=new b("recaptcha-nonce-tag"),Zt=new b("recaptcha-settings"),$=new b("recaptcha-v3-site-key"),it=new b("recaptcha-loader-options");function ot(o,e,g,{url:n,lang:i,nonce:t}={}){window.ng2recaptchaloaded=()=>{g(grecaptcha)};let c=document.createElement("script");c.innerHTML="";let{url:f,nonce:Y}=e(new URL(n||"https://www.google.com/recaptcha/api.js"));f.searchParams.set("render",o==="explicit"?o:o.key),f.searchParams.set("onload","ng2recaptchaloaded"),f.searchParams.set("trustedtypes","true"),i&&f.searchParams.set("hl",i),c.src=f.href;let x=Y||t;x&&c.setAttribute("nonce",x),c.async=!0,c.defer=!0,document.head.appendChild(c)}function nt({v3SiteKey:o,onBeforeLoad:e,onLoaded:g}){let n=o?{key:o}:"explicit";Ne.loadScript(n,e,g)}var Ne={loadScript:ot,newLoadScript:nt};function rt(o){return o.asObservable().pipe(se(e=>e!==null))}var Ie=(()=>{let e=class e{constructor(n,i,t,c,f,Y){this.platformId=n,this.language=i,this.baseUrl=t,this.nonce=c,this.v3SiteKey=f,this.options=Y;let x=this.init();this.ready=x?rt(x):F()}init(){if(e.ready)return e.ready;if(!ge(this.platformId))return;let n=new re(null);return e.ready=n,Ne.newLoadScript({v3SiteKey:this.v3SiteKey,onBeforeLoad:i=>{if(this.options?.onBeforeLoad)return this.options.onBeforeLoad(i);let t=new URL(this.baseUrl??i);return this.language&&t.searchParams.set("hl",this.language),{url:t,nonce:this.nonce}},onLoaded:i=>{let t=i;this.options?.onLoaded&&(t=this.options.onLoaded(i)),n.next(t)}}),n}};e.ready=null,e.\u0275fac=function(i){return new(i||e)(h(le),h(Xe,8),h(et,8),h(tt,8),h($,8),h(it,8))},e.\u0275prov=J({token:e,factory:e.\u0275fac});let o=e;return o})();var ie=(()=>{let e=class e{constructor(n,i,t){this.recaptchaLoader=i,this.zone=n,this.siteKey=t,this.init()}get onExecute(){return this.onExecuteSubject||(this.onExecuteSubject=new A,this.onExecuteObservable=this.onExecuteSubject.asObservable()),this.onExecuteObservable}get onExecuteError(){return this.onExecuteErrorSubject||(this.onExecuteErrorSubject=new A,this.onExecuteErrorObservable=this.onExecuteErrorSubject.asObservable()),this.onExecuteErrorObservable}execute(n){let i=new A;return this.grecaptcha?this.executeActionWithSubject(n,i):(this.actionBacklog||(this.actionBacklog=[]),this.actionBacklog.push([n,i])),i.asObservable()}executeActionWithSubject(n,i){let t=c=>{this.zone.run(()=>{i.error(c),this.onExecuteErrorSubject&&this.onExecuteErrorSubject.next({action:n,error:c})})};this.zone.runOutsideAngular(()=>{try{this.grecaptcha.execute(this.siteKey,{action:n}).then(c=>{this.zone.run(()=>{i.next(c),i.complete(),this.onExecuteSubject&&this.onExecuteSubject.next({action:n,token:c})})},t)}catch(c){t(c)}})}init(){this.recaptchaLoader.ready.subscribe(n=>{this.grecaptcha=n,this.actionBacklog&&this.actionBacklog.length>0&&(this.actionBacklog.forEach(([i,t])=>this.executeActionWithSubject(i,t)),this.actionBacklog=void 0)})}};e.\u0275fac=function(i){return new(i||e)(h(de),h(Ie),h($))},e.\u0275prov=J({token:e,factory:e.\u0275fac});let o=e;return o})(),Be=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=P({providers:[ie,Ie]});let o=e;return o})();var Le={validationField:{email:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 E-mail",email:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 E-mail \u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 (example@gmail.com)"},password:{required:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38 Password"}}};function st(o,e){o&1&&d(0,"mat-progress-bar",2)}var Ve=(()=>{let e=class e{constructor(){this.subscription=new ne,this.formBuilder=u(z),this.router=u(j),this.authApiService=u(Q),this.recaptchaV3Service=u(ie),this.validationField=Le.validationField,this.isLoading=!1,this.hidePassword=!0,this.form=this.initForm()}ngOnInit(){this.initForm(),this.subscription=this.recaptchaV3Service.execute("importantAction").subscribe(n=>this.recaptcha.setValue(n))}ngOnDestroy(){this.subscription.unsubscribe()}onSubmit(){if(this.form.invalid)return;let n=oe({},this.form.getRawValue());this.isLoading=!0,this.authApiService.login(n).pipe(_(()=>this.isLoading=!1)).subscribe(i=>this.router.navigate(["/"]))}get email(){return this.form.controls.email}get password(){return this.form.controls.password}get recaptcha(){return this.form.controls.recaptcha}initForm(){return this.formBuilder.group({email:["",[m.required,m.email]],password:["",[m.required]],recaptcha:["",[m.required]]})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["app-login"]],decls:27,vars:9,consts:[[1,"login-wrapper"],[1,"dark-theme",3,"ngSubmit","formGroup"],["mode","indeterminate"],["src","assets/images/logo-bsru.png","alt","logo"],["matInput","","type","email","formControlName","email"],["matSuffix","","fontIcon","email"],[3,"control","errorMessage"],["matInput","","type","password","formControlName","password","autocomplete","false",3,"type"],["matSuffix","",3,"click"],["type","submit","matRipple","",3,"disabled"],[1,"text"],[1,"forgot-password"],["routerLink","./forgot-password"]],template:function(i,t){i&1&&(r(0,"div",0)(1,"form",1),E("ngSubmit",function(){return t.onSubmit()}),w(2,st,1,0,"mat-progress-bar",2),d(3,"img",3),r(4,"h1"),l(5,"\u0E23\u0E30\u0E1A\u0E1A\u0E04\u0E25\u0E31\u0E07\u0E1E\u0E31\u0E2A\u0E14\u0E38"),s(),r(6,"mat-form-field")(7,"mat-label"),l(8,"E-mail"),s(),d(9,"input",4)(10,"mat-icon",5),r(11,"mat-error"),d(12,"app-error-field",6),s()(),r(13,"mat-form-field")(14,"mat-label"),l(15,"\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),s(),d(16,"input",7),r(17,"mat-icon",8),E("click",function(){return t.hidePassword=!t.hidePassword}),l(18),s(),r(19,"mat-error"),d(20,"app-error-field",6),s()(),r(21,"button",9)(22,"span",10),l(23,"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"),s()(),r(24,"div",11)(25,"a",12),l(26,"\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ?"),s()()()()),i&2&&(a(),p("formGroup",t.form),a(),S(2,t.isLoading?2:-1),a(10),p("control",t.email)("errorMessage",t.validationField.email),a(4),p("type",t.hidePassword?"password":"text"),a(2),M(t.hidePassword?"visibility_off":"visibility"),a(2),p("control",t.password)("errorMessage",t.validationField.password),a(),p("disabled",t.isLoading))},dependencies:[k,V,I,B,L,T,D,N,U,K,G,q,H,W,Ee,Z],styles:[".login-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100dvh;width:100dvw;padding:0 30px;box-sizing:border-box}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:15px;width:100%;max-width:400px;padding:40px 60px;background:#000000b3;border-radius:6px;box-shadow:5px 10px 20px #4e3515}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:-150px;left:calc(50% - 60px);width:120px}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;letter-spacing:1px;color:#f54831;font-weight:700}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:6px}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ffffffe6}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px;display:flex;align-items:center;justify-content:center;background-image:linear-gradient(144deg,#823876,#5b42f3 50%,#009ee3);background-image:linear-gradient(144deg,#f54831,#f17363 50%,#ff9800);border:none;border-radius:6px;box-shadow:#9741fc33 0 15px 30px -5px;color:#fff;font-size:1rem;line-height:1em;width:100%;padding:3px;text-decoration:none;-webkit-user-select:none;user-select:none;touch-action:manipulation;white-space:nowrap;cursor:pointer;transition:all .3s}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#05062db3;padding:16px 24px;border-radius:6px;width:100%;height:100%;font-size:1rem;font-weight:600;transition:.3s}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:0}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:enabled   span[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus:enabled   span[_ngcontent-%COMP%]{background:none}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:enabled{scale:.9}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-image:none}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   span[_ngcontent-%COMP%]{background-color:#ccc}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{width:100%;font-size:1rem;text-align:right}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff9;cursor:pointer;transition:color .3s}.login-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff5722}"]});let o=e;return o})();var at=[{path:"",component:Fe,children:[{path:"",component:Ve,canActivate:[ke]},{path:"forgot-password",component:je}]}],Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=P({imports:[ee.forChild(at),ee]});let o=e;return o})();var ct=_e.recaptcha.siteKey,lt=[{provide:$,useValue:ct}],Oi=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=P({providers:[lt],imports:[Te,xe,Re,Be]});let o=e;return o})();export{Oi as AuthModule};