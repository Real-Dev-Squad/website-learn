/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import Home from "@/App.vue";


describe( "Footer.vue", () => {
  it( "renders a footer", () => {
    const wrapper = mount( Home  );

    console.log( wrapper.html() );
  } );
} );