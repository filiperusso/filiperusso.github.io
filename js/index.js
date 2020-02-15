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

var router = new VueRouter();

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
  }
});

var App = Vue.extend({});
router.start(App, "#app");