//https://blog.logrocket.com/automatically-generate-react-components-plop-js/
module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component/Component.jsx.hbs",
      },
      //skipping for now
      //   {
      //     type: "add",
      //     path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
      //     templateFile: "plop-templates/Component/Component.test.js.hbs",
      //   },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{kebabCase name}}.scss",
        templateFile: "plop-templates/Component/component.scss.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.jsx",
        templateFile: "plop-templates/Component/Component.stories.jsx.hbs",
      },
      //if for some reason index doesnt exist make one
      {
        type: "add",
        path: "./src/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      //add import to index.js
      {
        type: "append",
        path: "./src/index.js",
        pattern: "/* Plop Imports */",
        template:
          "import {{pascalCase name}} from './components/{{pascalCase name}}/{{pascalCase name}}';",
      },
      //add import to index.scss
      {
        type: "append",
        path: "./src/index.scss",
        pattern: "/* Plop Imports */",
        template:
          '@import "./components/{{pascalCase name}}/{{kebabCase name}}.scss";',
      },
      {
        type: "append",
        path: "./src/index.js",
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: "t{{pascalCase name}},",
      },
    ],
  });
  //hiding for now
  // plop.setGenerator("page", {
  //   description: "Create a page",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your page name?",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "add",
  //       path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.js",
  //       templateFile: "plop-templates/Page/Page.js.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js",
  //       templateFile: "plop-templates/Page/Page.test.js.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css",
  //       templateFile: "plop-templates/Page/Page.module.css.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/pages/{{pascalCase name}}.stories.jsx",
  //       templateFile: "plop-templates/Page/stories.js.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/pages/index.js",
  //       templateFile: "plop-templates/injectable-index.js.hbs",
  //       skipIfExists: true,
  //     },
  //     {
  //       type: "append",
  //       path: "src/pages/index.js",
  //       pattern: "/* PLOP_INJECT_IMPORT */",
  //       template: "import {{pascalCase name}} from './{{pascalCase name}}';",
  //     },
  //     {
  //       type: "append",
  //       path: "src/pages/index.js",
  //       pattern: "/* PLOP_INJECT_EXPORT */",
  //       template: "t{{pascalCase name}},",
  //     },
  //   ],
  // });

  //hiding for now
  // plop.setGenerator("service", {
  //   description: "Create service",
  //   prompts: [
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "What is your service name?",
  //     },
  //   ],
  //   actions: [
  //     {
  //       type: "add",
  //       path: "src/services/{{camelCase name}}.js",
  //       templateFile: "plop-templates/service.js.hbs",
  //     },
  //     {
  //       type: "add",
  //       path: "src/services/index.js",
  //       templateFile: "plop-templates/injectable-index.js.hbs",
  //       skipIfExists: true,
  //     },
  //     {
  //       type: "append",
  //       path: "src/services/index.js",
  //       pattern: "/* PLOP_INJECT_IMPORT */",
  //       template: "import {{camelCase name}} from './{{camelCase name}}';",
  //     },
  //     {
  //       type: "append",
  //       path: "src/services/index.js",
  //       pattern: "/* PLOP_INJECT_EXPORT */",
  //       template: "t{{camelCase name}},",
  //     },
  //   ],
  // });

  //hiding for now
  //   plop.setGenerator("hook", {
  //     description: "Create a custom react hook",
  //     prompts: [
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "What is your hook name?",
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: "add",
  //         path: "src/common/hooks{{camelCase name}}.js",
  //         templateFile: "plop-templates/hook.js.hbs",
  //       },
  //       {
  //         type: "add",
  //         path: "src/common/hooks/index.js",
  //         templateFile: "plop-templates/injectable-index.js.hbs",
  //         skipIfExists: true,
  //       },
  //       {
  //         type: "append",
  //         path: "src/common/hooks/index.js",
  //         pattern: "/* PLOP_INJECT_IMPORT */",
  //         template: "import {{camelCase name}} from './{{camelCase name}}';",
  //       },
  //       {
  //         type: "append",
  //         path: "src/common/hooks/index.js",
  //         pattern: "/* PLOP_INJECT_EXPORT */",
  //         template: "t{{camelCase name}},",
  //       },
  //     ],
  //   });
};
