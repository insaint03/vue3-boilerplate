# vue3-bolierplate

Vite based vue3-boilerplate template.
Includes:
 - [x] vue-router
 - [x] vuetify3
 - [x] pinia store

## How to run

```bash
# run preview on http://localhost:8081
$ vite --port 8081

# run unit test
$ vitest
```

## Folder Hierarchy

 - [ ] **/.github** github actions
 - [x] **/src** main source root, aliased `'@/'`
   - [ ] **./models** data models
   - [x] **./assets** media & data assets
   - [x] **./components** common components
   - [x] **./views** vue-router components and its path fragment
   - [x] **./plugins** common plugins, including vuetify, vue-router
   - [ ] **./stores** pinia stores
 - [ ] **/tests**  test folder (\*\*.test.\*\* or \*\*.spec.\*\*)
   - [x] **./components** test for components
   - [ ] **./models** test for data models
   - [ ] **./stores** test store setup
   - [x] **./plugins** test for plugins
   


## Licensed
MIT
