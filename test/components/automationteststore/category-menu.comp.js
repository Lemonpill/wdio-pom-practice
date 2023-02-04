class CategoryMenuComponent {
  categoryMenuLink(name) {
    return $$(`//a[contains(text(), '${name}')]`);
  }
}

export default new CategoryMenuComponent();
