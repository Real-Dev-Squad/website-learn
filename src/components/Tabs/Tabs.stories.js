import Tabs from "./index";

export default {
    name: 'Shared/Tabs',
    component: Tabs,
    title: 'Shared/Components/Tabs',
    decorators: [() => ({ template: '<div id="#app"><header></header><main></main><story/></div>' })],
}

const Template = (args) => ({
    components: { Tabs },
    setup() {
      return { ...args };
    },
    template: '<Tabs />',
  });

export const TabsScrollBar = Template.bind({});