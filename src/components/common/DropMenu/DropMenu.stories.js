import DropMenu from './index.vue';

export default {
  name: 'Shared/common/DropMenu',
  component: DropMenu,
  title: 'Shared/Components/common/DropMenu',
  args: {
    width: '100',
  },
  argTypes: {
    width: { control: 'text' },
    default: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { DropMenu },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { 
      ...args 
    };
  },
  // Then, the spread values can be accessed directly in the template
  template: `
    <drop-menu v-bind="args">
      <template v-slot>
        ${args.default}
      </template>
    <drop-menu/>`,
});

export const InsideCard = Template.bind({});
InsideCard.args = {
  width: '100',
  default: `
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Report</a></li>
      <li><a href="#">Read</a></li>
    </ul>
  `,
}

export const ElseWhere = Template.bind({});
ElseWhere.args = {
  width: '200',
  default: `
    <ul>
      <li><a href="#">File</a></li>
      <li><a href="#">Edit</a></li>
      <li><a href="#">Quit</a></li>
    </ul>
  `,
}
