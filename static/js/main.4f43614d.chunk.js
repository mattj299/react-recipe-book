(this["webpackJsonprecipe-book"]=this["webpackJsonprecipe-book"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/loaded-guac-veg-tacos.1e068f6a.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/thai-green-curry.8424ea0f.jpg"},26:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),i=a(16),s=a(13),c=a(7),l=a(8),o=a(11),d=a(10),m=a(9),u=a(0),p=a.n(u),h=a(22),f=a.n(h),g=a(1),v=a(2);a(32);var E=function(e){var t=e.popupText;return p.a.createElement("div",{className:"popup-container hide"},p.a.createElement("div",{className:"popup"},p.a.createElement("p",null,t)))},b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggleOpen=function(){window.innerWidth<=605?n.setState({mobileNav:!0}):n.setState({mobileNav:!1}),window.addEventListener("resize",n.toggleOpen)},n.toggleActive=function(){n.setState({activeNav:!n.state.activeNav})},n.onSearchBarChange=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.value){e.next=10;break}return e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t.target.value));case 3:return a=e.sent,e.next=6,a.json();case 6:i=e.sent,n.setState({searchBar:i}),e.next=11;break;case 10:n.setState({searchBar:""});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.displayAddRecipe=function(){var e=document.querySelector(".add-recipe-container"),t=document.querySelector(".add-recipe");e.classList.contains("hide")?(e.classList.remove("hide"),document.body.classList.add("stop-scrolling"),setTimeout((function(){t.classList.add("fadeIn")}),0)):(e.classList.add("hide"),document.body.classList.remove("stop-scrolling"),setTimeout((function(){t.classList.remove("fadeIn")}),0))},n.displaySearchRecipe=function(){var e=document.querySelector(".search-recipe-container"),t=document.querySelector(".search-recipe");e.classList.contains("hide")?(e.classList.remove("hide"),document.body.classList.add("stop-scrolling"),setTimeout((function(){t.classList.add("fadeIn")}),0)):(e.classList.add("hide"),document.body.classList.remove("stop-scrolling"),setTimeout((function(){t.classList.remove("fadeIn")}),0),n.setState({searchBar:""}))},n.state={searchBar:"",mobileNav:!1,activeNav:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.toggleOpen()}},{key:"render",value:function(){var e,t,a=this.props,n=a.textRecipes,r=a.displayTextRecipes,i=a.handleAddRecipeSubmit,s=a.AddRecipe,c=a.handleAddRandomRecipe,l=a.SearchRecipe,o=a.handleAddSearchRecipe,d=this.state,m=d.searchBar,u=d.mobileNav,h=d.activeNav;return e=n?p.a.createElement(g.b,{to:"/",onClick:r},p.a.createElement("i",{className:"fas fa-th"})):p.a.createElement(g.b,{to:"/textRecipes",onClick:r},p.a.createElement("i",{className:"fas fa-list-ul"})),t=n?p.a.createElement(g.b,{to:"/",onClick:r},p.a.createElement("li",{className:"dropdown-ul-item",onClick:this.toggleActive},"Change home view")):p.a.createElement(g.b,{to:"/textRecipes",onClick:r},p.a.createElement("li",{className:"dropdown-ul-item",onClick:this.toggleActive},"Change home view")),p.a.createElement(p.a.Fragment,null,p.a.createElement(s,{displayAddRecipe:this.displayAddRecipe,handleAddRecipeSubmit:i}),p.a.createElement(l,{displaySearchRecipe:this.displaySearchRecipe,searchBar:m,onSearchBarChange:this.onSearchBarChange,textRecipes:n,handleAddSearchRecipe:o}),!u&&p.a.createElement("header",{className:"main-header"},p.a.createElement(g.b,{to:n?"/textRecipes":"/"},p.a.createElement("div",{className:"left-header"},p.a.createElement("i",{className:"fas fa-utensils"}),p.a.createElement("p",null,"recipe box"),p.a.createElement("i",{className:"fas fa-utensil-spoon spoon"}))),p.a.createElement("div",{className:"right-header"},e,p.a.createElement("button",{onClick:this.displaySearchRecipe},p.a.createElement("i",{className:"fas fa-search"})),p.a.createElement("button",{onClick:c},"add random recipe"),p.a.createElement("button",{onClick:this.displayAddRecipe},"add recipe"))),u&&p.a.createElement("header",{className:"collapsed-header"},p.a.createElement(g.b,{to:n?"/textRecipes":"/"},p.a.createElement("div",{className:"left-header"},p.a.createElement("i",{className:"fas fa-utensils"}),p.a.createElement("p",null,"recipe box"),p.a.createElement("i",{className:"fas fa-utensil-spoon spoon"}))),p.a.createElement("div",{className:"collapsed-header-toggle",onClick:this.toggleActive},p.a.createElement("i",{className:h?"fas fa-times":"fas fa-bars"})),p.a.createElement("ul",{className:h?"dropdown-ul active":"dropdown-ul",onClick:this.toggleActive},t,p.a.createElement("li",{className:"dropdown-ul-item",onClick:this.displaySearchRecipe},"Search For New Recipes"),p.a.createElement("li",{className:"dropdown-ul-item",onClick:c},"Add Random Recipe"),p.a.createElement("li",{className:"dropdown-ul-item",onClick:this.displayAddRecipe},"Add Recipe"))))}}]),a}(p.a.Component);var N=function(e){var t=e.displayAddRecipe,a=e.handleAddRecipeSubmit;return p.a.createElement("div",{className:"add-recipe-container clearfix hide"},p.a.createElement("div",{className:"add-recipe"},p.a.createElement("div",{className:"add-recipe-header"},p.a.createElement("label",null,"add new recipe"),p.a.createElement("button",{className:"close-add-recipe",onClick:t},"X")),p.a.createElement("form",{className:"add-recipe-form",onSubmit:a},p.a.createElement("input",{className:"add-recipe-input add-name",name:"name",placeholder:"recipe name",defaultValue:""}),p.a.createElement("input",{className:"add-recipe-input add-source",name:"source",placeholder:"recipe source",defaultValue:""}),p.a.createElement("input",{className:"add-recipe-input add-img",name:"img",placeholder:"recipe image",defaultValue:""}),p.a.createElement("textarea",{className:"add-recipe-input add-ingredients",name:"ingredients",placeholder:"ingredients, separated by a comma",defaultValue:""}),p.a.createElement("textarea",{className:"add-recipe-input add-measurements",name:"measurements",placeholder:"measurement in order of ingredient, comma separated",defaultValue:""}),p.a.createElement("textarea",{className:"add-recipe-input add-instructions",name:"instructions",placeholder:"instructions on how to make the dish",defaultValue:""}),p.a.createElement("button",{className:"add-new-recipe"},"add"))))};var y=function(e){var t,a,n=e.textRecipes,r=e.displaySearchRecipe,i=e.searchBar,c=e.onSearchBarChange,l=e.handleAddSearchRecipe;return i&&i.meals?(a=Object(s.a)(i.meals),i.meals.length>10&&(a.length=window.innerWidth>=645?10:window.innerWidth>=360?5:3),t=n?a.map((function(e){return p.a.createElement("div",{className:"searched-meal-text",key:e.idMeal},p.a.createElement("div",{style:{position:"relative"}},p.a.createElement("button",{className:"text-recipes-button"},e.strMeal),p.a.createElement("div",{className:"save-overlay save-overlay-text",onClick:function(){l(e),r()}},p.a.createElement("p",null,"Save"))))})):a.map((function(e){return p.a.createElement("div",{className:"searched-meal",key:e.idMeal},p.a.createElement("div",{className:"recipe-container"},p.a.createElement("div",{className:"recipe"},p.a.createElement("img",{className:"recipe-img searched-meal-recipe-img",src:e.strMealThumb,alt:e.strMeal}),p.a.createElement("p",{className:"recipe-caption"},e.strMeal),p.a.createElement("div",{className:"save-overlay",onClick:function(){l(e),r()}},p.a.createElement("p",null,"Save")))))}))):""!==i&&(t=p.a.createElement("div",{className:"no-recipe"},p.a.createElement("p",null,"No Recipes found"))),p.a.createElement("div",{className:"search-recipe-container clearfix hide"},p.a.createElement("div",{className:"search-recipe"},p.a.createElement("div",{className:"search-recipe-header"},p.a.createElement("label",null,"Search new recipe"),p.a.createElement("button",{className:"close-search-recipe",onClick:r},"X")),p.a.createElement("form",null,p.a.createElement("input",{className:"search-recipe-input",name:"search",placeholder:"Search for a recipe",onChange:c,defaultValue:""})),p.a.createElement("ul",{className:"search-recipe-ul"},t)))};var k=function(e){var t=e.recipes;return p.a.createElement("div",{className:"text-recipes-container"},t.map((function(e){return p.a.createElement(g.b,{to:e.nameLink,key:e.nameLink},p.a.createElement("button",{className:"text-recipes-button"},e.name))})))};var x=function(e){var t=e.food.map((function(e){var t=e.name,a=e.img,n=e.nameLink;return p.a.createElement(g.b,{className:"recipe-link",to:"/"+n,key:t},p.a.createElement("div",{className:"recipe-container"},p.a.createElement("div",{className:"recipe"},p.a.createElement("img",{className:"recipe-img",src:a,alt:t}),p.a.createElement("p",{className:"recipe-caption"},t))))}));return p.a.createElement("div",{className:"home-container"},t)},S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){setTimeout((function(){document.getElementsByClassName("recipe")[0].classList.add("fadeIn")}),0)}},{key:"render",value:function(){var e=this.props.food,t=e.name,a=e.img,n=e.ingredients,r=e.nameLink,i=e.source,s=e.instructions,c=e.measurements,l=this.props,o=l.handleDeleteClick,d=l.textRecipes,m=l.handlePopupText,u=n.length>10?"Advanced":n.length>5?"Intermediate":"Beginner",h=Math.round(n.length/2),f=n.slice(0,h),v=n.slice(h),E=c.slice(0,h),b=c.slice(h);return s.length>=1750?p.a.createElement("div",{style:{opacity:0},className:"recipe information clearfix"},p.a.createElement("div",{className:"information-image"},p.a.createElement("div",{className:"information-header"},p.a.createElement(g.b,{to:!1===d?"/":"/textRecipes"},p.a.createElement("button",{className:"information-close"},"X")),p.a.createElement("h2",null,t),p.a.createElement("div",{className:"information-buttons"},p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},p.a.createElement("button",{className:"information-button"},"source")),p.a.createElement(g.b,{to:"".concat(r,"/edit")},p.a.createElement("button",{className:"information-button"},"edit")),p.a.createElement(g.b,{to:!1===d?"/":"/textRecipes"},p.a.createElement("button",{onClick:function(){o(t),m("Recipe deleted!")},className:"information-button"},"delete"))),p.a.createElement("div",{className:"information-subcontainer"},"Difficulty: ",p.a.createElement("span",{style:{float:"right"}},u)),p.a.createElement("div",{className:"information-subcontainer clearfix"},p.a.createElement("p",{className:"information-subcontainer-header"},"Ingredients"),p.a.createElement("ul",{className:"ingredients"},p.a.createElement("div",{className:"ingredients-left"},f.map((function(e,t){return p.a.createElement("li",{key:"".concat(e,"/").concat(E[t]),className:"ingredient"},e," (",E[t],")")}))),p.a.createElement("div",{className:"ingredients-right"},v.map((function(e,t){return p.a.createElement("li",{key:"".concat(e,"/(").concat(b[t],")"),className:"ingredient"},e," (",b[t],")")})))))),p.a.createElement("img",{src:a,alt:t})),p.a.createElement("div",{className:"information-text"},p.a.createElement("div",{className:"information-subcontainer"},p.a.createElement("p",{className:"information-subcontainer-header"},"Instructions"),p.a.createElement("p",{className:"instructions"},s)))):p.a.createElement("div",{style:{opacity:0},className:"recipe information clearfix"},p.a.createElement("div",{className:"information-image"},p.a.createElement("div",{className:"information-header"},p.a.createElement(g.b,{to:!1===d?"/":"/textRecipes"},p.a.createElement("button",{className:"information-close"},"X")),p.a.createElement("h2",null,t),p.a.createElement("div",{className:"information-buttons"},p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},p.a.createElement("button",{className:"information-button"},"source")),p.a.createElement(g.b,{to:"".concat(r,"/edit")},p.a.createElement("button",{className:"information-button"},"edit")),p.a.createElement(g.b,{to:!1===d?"/":"/textRecipes"},p.a.createElement("button",{onClick:function(){o(t),m("Recipe deleted!")},className:"information-button"},"delete"))),p.a.createElement("div",{className:"information-subcontainer"},"Difficulty: ",p.a.createElement("span",{style:{float:"right"}},u))),p.a.createElement("img",{src:a,alt:t})),p.a.createElement("div",{className:"information-text"},p.a.createElement("div",{className:"information-subcontainer clearfix"},p.a.createElement("p",{className:"information-subcontainer-header"},"Ingredients"),p.a.createElement("ul",{className:"ingredients"},p.a.createElement("div",{className:"ingredients-left"},f.map((function(e,t){return p.a.createElement("li",{key:"".concat(e,"/").concat(E[t]),className:"ingredient"},f[t]," (",E[t],")")}))),p.a.createElement("div",{className:"ingredients-right"},v.map((function(e,t){return p.a.createElement("li",{key:"".concat(e,"/").concat(E[t]),className:"ingredient"},v[t]," (",b[t],")")}))))),p.a.createElement("div",{className:"information-subcontainer"},p.a.createElement("p",{className:"information-subcontainer-header"},"Instructions"),p.a.createElement("p",{className:"instructions"},s))))}}]),a}(p.a.Component),R=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).mobileLayout=function(){window.innerWidth>=605?n.setState({mobileWidth:!1}):n.setState({mobileWidth:!0}),window.addEventListener("resize",n.mobileLayout)},n.state={mobileWidth:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fadeIn=setTimeout((function(){document.getElementsByClassName("recipe")[0].classList.add("fadeIn")}),0),this.mobileLayout()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.mobileLayout)}},{key:"render",value:function(){var e=this.props.food,t=e.name,a=e.img,n=e.ingredients,r=e.source,i=e.nameLink,s=e.measurements,c=e.instructions,l=this.props.handleEditRecipeSubmit,o=this.state.mobileWidth;return p.a.createElement("div",{style:{opacity:0},className:"recipe information clearfix"},o&&p.a.createElement(p.a.Fragment,null,p.a.createElement(g.b,{to:"/".concat(i)},p.a.createElement("button",{className:"edit-information-close"},"X")),p.a.createElement("h2",null,"Edit ",t)),p.a.createElement("div",{className:"edit-information-image"},p.a.createElement("img",{src:a,alt:t})),p.a.createElement("div",{className:"edit-information-text"},!o&&p.a.createElement(p.a.Fragment,null,p.a.createElement(g.b,{to:"/".concat(i)},p.a.createElement("button",{className:"edit-information-close"},"X")),p.a.createElement("h2",null,"Edit ",t)),p.a.createElement("form",{className:"edit-recipe-form",id:t,onSubmit:l},p.a.createElement("label",{className:"edit-recipe-label"},"New Name"),p.a.createElement("input",{className:"edit-recipe-input edit-name",name:"name",type:"text",defaultValue:t}),p.a.createElement("label",{className:"edit-recipe-label"},"New Ingredients"),p.a.createElement("textarea",{className:"edit-recipe-input edit-ingredients",name:"ingredients",type:"text",defaultValue:n}),p.a.createElement("label",{className:"edit-recipe-label"},"New Ingredients Measurements"),p.a.createElement("textarea",{className:"edit-recipe-input edit-measurements",name:"measurements",type:"text",defaultValue:s}),p.a.createElement("label",{className:"edit-recipe-label"},"New Instructions"),p.a.createElement("textarea",{className:"edit-recipe-input edit-instructions",name:"instructions",type:"text",defaultValue:c}),p.a.createElement("label",{className:"edit-recipe-label"},"New Image Url"),p.a.createElement("input",{className:"edit-recipe-input edit-img",name:"img",type:"text",defaultValue:a}),p.a.createElement("label",{className:"edit-recipe-label"},"New Recipe Source"),p.a.createElement("input",{className:"edit-recipe-input edit-source",name:"source",type:"text",defaultValue:r}),p.a.createElement("button",{className:"edit-recipe-submit"},"submit changes"))))}}]),a}(p.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return p.a.createElement("footer",null,p.a.createElement("div",{className:"left-header"},p.a.createElement("i",{className:"fas fa-utensils"}),p.a.createElement("p",null,"recipe box"),p.a.createElement("i",{className:"fas fa-utensil-spoon spoon"})))}}]),a}(p.a.Component),I=a(24),M=a.n(I),L=a(25),A=a.n(L),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={food:[{name:"Loaded Guacamole Tacos",nameLink:"LoadedGuacamoleTacos",ingredients:["fresh avocados","black beans","jalapenos","tomatoes or tomatillos","corn or small flour tortillas","corn","lime","cilantro"],measurements:["2","1/2 cup","1 tablespoon","1","3","1/2 cup","1/2","4 tablespoons"],instructions:"Mash the avocado in a medium bowl with a fork (or molcajete) until it reaches your desired consistency, chunky or smooth. Add a small squeeze each of lime and lemon juice. Mix well and taste. Add more lime juice, lemon juice, and salt as you like. Add the black bean ingredients to a 2 quart sauce pot and heat over medium-low until hot. Turn off the heat and allow to cool to a very warm, eatable temp. If tortillas aren't soft and pliable (or if you like your tortillas warm), stack them on microwaveable plate, separate with paper towels, heat for 20 to 30 seconds. Line half of each tortilla with lettuce. Spoon the black bean mixture over the lettuce (on half of the tortilla). Spoon guacamole on the other half. Top with a few shakes of hot sauce (optional) and a sprinkle of cilantro. Serve with lemon and lime wedges.",img:M.a,source:"http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/"},{name:"Green Curry",nameLink:"GreenCurry",ingredients:["rice","coconut milk","carrots","onions","garlic","green curry paste","asparagus","cilantro"],measurements:["1 cup","1/2 cup","4","1","3","3 tablespoons","5","4 tablespoons"],instructions:"To cook the rice, bring a large pot of water to boil. Add the rinsed rice and continue boiling for 30 minutes, reducing heat as necessary to prevent overflow. Remove from heat, drain the rice and return the rice to pot. Cover and let the rice rest for 10 minutes or longer, until you\u2019re ready to serve. Warm a large skillet with deep sides over medium heat. Once it\u2019s hot, add a couple teaspoons of oil. Cook the onion, ginger and garlic with a sprinkle of salt for about 5 minutes, stirring often. Add the asparagus and carrots and cook for 3 more minutes, stirring occasionally. Then add the curry paste and cook, stirring often, for 2 minutes. Pour the coconut milk into the pan, along with \xbd cup water and 1 \xbd teaspoons sugar. Bring the mixture to a simmer. Reduce heat as necessary to maintain a gentle simmer and cook until the carrots and asparagus are tender and cooked through, about 5 to 10 minutes. Once the vegetables are done cooking, stir the spinach into the mixture and cook until the spinach has wilted, about 30 seconds. Remove the curry from heat and season with rice vinegar and soy sauce. Add salt and red pepper flakes (optional), to taste. Divide rice and curry into bowls and garnish with chopped cilantro and a sprinkle of red pepper flakes, if you\u2019d like.",img:A.a,source:"http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/"}],textRecipes:!1,popupText:""},n.displayTextRecipes=n.displayTextRecipes.bind(Object(o.a)(n)),n.handlePopupText=n.handlePopupText.bind(Object(o.a)(n)),n.handleDeleteClick=n.handleDeleteClick.bind(Object(o.a)(n)),n.handleEditRecipeSubmit=n.handleEditRecipeSubmit.bind(Object(o.a)(n)),n.handleAddRecipeSubmit=n.handleAddRecipeSubmit.bind(Object(o.a)(n)),n.handleAddRandomRecipe=n.handleAddRandomRecipe.bind(Object(o.a)(n)),n.handleAddSearchRecipe=n.handleAddSearchRecipe.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("food");null!=e&&this.setState({food:JSON.parse(e)}),document.URL.includes("/textRecipes")&&this.setState({textRecipes:!0})}},{key:"displayTextRecipes",value:function(){this.setState({textRecipes:!this.state.textRecipes})}},{key:"handlePopupText",value:function(e){this.setState({popupText:e},(function(){var e=document.querySelector(".popup-container");e.classList.remove("hide"),e.classList.add("fadeIn"),document.body.classList.add("stop-scrolling"),setTimeout((function(){e.classList.remove("fadeIn")}),2e3),setTimeout((function(){e.classList.add("hide"),document.body.classList.remove("stop-scrolling")}),2500)}))}},{key:"handleDeleteClick",value:function(e){var t=this.state.food.filter((function(t){return e!==t.name}));localStorage.setItem("food",JSON.stringify(t)),this.setState({food:t})}},{key:"handleEditRecipeSubmit",value:function(e){e.preventDefault();var t=Object(s.a)(this.state.food),a=document.querySelector(".edit-name"),n=document.querySelector(".edit-ingredients"),r=document.querySelector(".edit-measurements"),i=document.querySelector(".edit-instructions"),c=document.querySelector(".edit-img"),l=document.querySelector(".edit-source"),o=this.state.food.findIndex((function(t){return t.name===e.target.id}));if(a.value&&n.value&&r.value&&i.value&&c.value&&l.value){for(var d=n.value.trim().split(","),m=r.value.trim().split(",").map((function(e){return e.trim()}));m.length<d.length;)m.push("");m=m.map((function(e){return e||(e="to serve")})),console.log(m),t[o].name=a.value.trim(),t[o].nameLink=a.value.replace(/\W/g,""),t[o].ingredients=d,t[o].measurements=m,t[o].instructions=i.value.trim(),t[o].img=c.value.trim(),t[o].source=l.value.trim(),localStorage.setItem("food",JSON.stringify(t)),this.handlePopupText("Changes saved!"),this.setState({food:t}),setTimeout((function(){window.location.pathname="/".concat(t[o].nameLink)}),1500)}else this.handlePopupText("All inputs need to be filled out.")}},{key:"handleAddRecipeSubmit",value:function(e){e.preventDefault();var t=Object(s.a)(this.state.food),a=document.querySelector(".add-name"),n=document.querySelector(".add-ingredients"),r=document.querySelector(".add-measurements"),i=document.querySelector(".add-instructions"),c=document.querySelector(".add-img"),l=document.querySelector(".add-source");if(a.value&&n.value&&r.value&&i.value&&c.value&&l.value){for(var o=n.value.trim().split(","),d=r.value.trim().split(",").map((function(e){return e.trim()}));d.length<o.length;)d.push("");d=d.map((function(e){return e=e&&" "!==e?e.trim():"to serve"}));var m={name:a.value.trim(),nameLink:a.value.replace(/\W/g,""),ingredients:o,measurements:d,instructions:i.value.trim(),img:c.value.trim(),source:l.value.trim()};t.push(m),document.getElementsByClassName("add-recipe-container")[0].classList.add("hide"),localStorage.setItem("food",JSON.stringify(t)),this.handlePopupText("Recipe added!"),this.setState({food:t})}else document.querySelector(".add-recipe-container").classList.add("hide"),document.querySelector(".add-recipe").classList.remove("add-recipe-fadeIn"),this.handlePopupText("All inputs need to be filled out.")}},{key:"handleAddRandomRecipe",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,c,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.handlePopupText("Created Random Recipe!"),e.next=3,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.meals[0],(i={}).name=n.strMeal,i.nameLink=i.name.replace(/\W/g,""),i.img=n.strMealThumb,l=[],(c=[]).push(n.strIngredient1,n.strIngredient2,n.strIngredient3,n.strIngredient4,n.strIngredient5,n.strIngredient6,n.strIngredient7,n.strIngredient8,n.strIngredient9,n.strIngredient10,n.strIngredient11,n.strIngredient12,n.strIngredient13,n.strIngredient14,n.strIngredient15,n.strIngredient16,n.strIngredient17,n.strIngredient18,n.strIngredient19,n.strIngredient20),c=c.filter((function(e){return e})),l.push(n.strMeasure1,n.strMeasure2,n.strMeasure3,n.strMeasure4,n.strMeasure5,n.strMeasure6,n.strMeasure7,n.strMeasure8,n.strMeasure9,n.strMeasure10,n.strMeasure11,n.strMeasure12,n.strMeasure13,n.strMeasure14,n.strMeasure15,n.strMeasure16,n.strMeasure17,n.strMeasure18,n.strMeasure19,n.strMeasure20),l.length=c.length,l=l.map((function(e){return e=e&&" "!==e?e.trim():"to serve"})),i.ingredients=c,i.measurements=l,i.instructions=n.strInstructions,i.source=n.strSource,(o=Object(s.a)(this.state.food)).push(i),localStorage.setItem("food",JSON.stringify(o)),this.setState({food:o});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleAddSearchRecipe",value:function(e){var t={};t.name=e.strMeal,t.nameLink=t.name.replace(/\W/g,""),t.img=e.strMealThumb;var a=[],n=[];a.push(e.strIngredient1,e.strIngredient2,e.strIngredient3,e.strIngredient4,e.strIngredient5,e.strIngredient6,e.strIngredient7,e.strIngredient8,e.strIngredient9,e.strIngredient10,e.strIngredient11,e.strIngredient12,e.strIngredient13,e.strIngredient14,e.strIngredient15,e.strIngredient16,e.strIngredient17,e.strIngredient18,e.strIngredient19,e.strIngredient20),a=a.filter((function(e){return e})),n.push(e.strMeasure1,e.strMeasure2,e.strMeasure3,e.strMeasure4,e.strMeasure5,e.strMeasure6,e.strMeasure7,e.strMeasure8,e.strMeasure9,e.strMeasure10,e.strMeasure11,e.strMeasure12,e.strMeasure13,e.strMeasure14,e.strMeasure15,e.strMeasure16,e.strMeasure17,e.strMeasure18,e.strMeasure19,e.strMeasure20),n.length=a.length,n=n.map((function(e){return e=e&&" "!==e?e.trim():"to serve"})),t.ingredients=a,t.measurements=n,t.instructions=e.strInstructions,t.source=e.strSource;var r=Object(s.a)(this.state.food);r.push(t),localStorage.setItem("food",JSON.stringify(r)),this.handlePopupText("New Recipe Added!"),this.setState({food:r})}},{key:"render",value:function(){var e=this;return p.a.createElement(g.a,{basename:"/recipe-book"},p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"no-footer-content"},p.a.createElement(E,{popupText:this.state.popupText}),p.a.createElement(b,{textRecipes:this.state.textRecipes,displayTextRecipes:this.displayTextRecipes,handleAddRecipeSubmit:this.handleAddRecipeSubmit,AddRecipe:N,SearchRecipe:y,handlePopupText:this.handlePopupText,handleAddRandomRecipe:this.handleAddRandomRecipe,handleAddSearchRecipe:this.handleAddSearchRecipe}),p.a.createElement(v.c,null,p.a.createElement(v.a,{exact:!0,path:"/",render:function(t){return p.a.createElement(x,{food:e.state.food})}}),p.a.createElement(v.a,{path:"/textRecipes",render:function(t){return p.a.createElement(k,{recipes:e.state.food})}}),this.state.food.map((function(t){return p.a.createElement(v.a,{exact:!0,key:t.nameLink,path:"/".concat(t.nameLink),render:function(a){return p.a.createElement(S,{textRecipes:e.state.textRecipes,food:t,handleDeleteClick:e.handleDeleteClick,handlePopupText:e.handlePopupText})}})})),this.state.food.map((function(t){return p.a.createElement(v.a,{key:t.nameLink,path:"/".concat(t.nameLink,"/edit"),render:function(a){return p.a.createElement(R,{food:t,handleEditRecipeSubmit:e.handleEditRecipeSubmit})}})})))),p.a.createElement(w,null)))}}]),a}(p.a.Component);f.a.render(p.a.createElement(C,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4f43614d.chunk.js.map