import Footer from './index';

export default {
  name: 'Shared/Footer',
  component: Footer,
  title: 'Shared/Components/Footer',
  decorators: [() => ({ template: '<div id="#app"><header></header><main></main><story/></div>' })],
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Footer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Footer />',
});

export const PrimaryFooter = Template.bind({});