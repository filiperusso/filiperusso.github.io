Vue.use(VueRouter);

var HomeComponent = Vue.extend({
  template: "#home-component-template"
});

var ArtComponent = Vue.extend({
  template: "#art-component-template"
});

var BioComponent = Vue.extend({
  template: "#bio-component-template"
});

var WorkComponent = Vue.extend({
  template: "#work-component-template"
});

var HorrorComponent = Vue.extend({
  template: "#horror-component-template"
});

var CjaComponent = Vue.extend({
  template: "#cja-component-template"
});

var AsfComponent = Vue.extend({
  template: "#asf-component-template"
});

var LoveComponent = Vue.extend({
  template: "#love-component-template"
});

var InLoveComponent = Vue.extend({
  template: "#inlove-component-template"
});

var router = new VueRouter({history: true});

router.map({
  '/': {
    component: HomeComponent  
	  },	
  '/art': {
    component: ArtComponent
  },
  '/bio': {
    component: BioComponent
  },
  '/work': {
    component: WorkComponent
  },
  '/art/materia-de-salvacao-ou-o-horror': {
    component: HorrorComponent
  },
  '/art/caro-jovem-adulto': {
    component: CjaComponent
  },
  '/art/asfixia': {
    component: AsfComponent
  },
  '/art/love-scars': {
    component: LoveComponent
  },
  '/art/love-scars/inlove': {
    component: InLoveComponent
  },
  '*': {
    component: HomeComponent  
  }
});

router.beforeEach(function (to, from, next) { 
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    next();
});

var App = Vue.extend({});
router.start(App, "#app");
