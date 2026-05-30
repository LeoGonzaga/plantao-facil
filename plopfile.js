export default function (plop) {
  plop.setGenerator("component", {
    description: "Criar componente React",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do componente:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types.ts",
        templateFile: "templates/types.hbs",
      },
    ],
  });
}
