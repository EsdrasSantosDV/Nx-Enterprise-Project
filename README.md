# Nx-Enterprise-Project WMS 
Enterprise Project WMS

Angular (version 16)
Standalone APIs
Material Design
Tailwind
Nx
Nx Generators
Enterprise Monorepo Pattern
Signals
Signal-based State Management
Route-based Inputs
Facade Pattern
OnPush Change Detection
Observable Pattern

Download dependencies
npm install

run the frontend
nx serve ng-template-khan-esdras-portal

#Structure Pattern

feature: A feature module implements a use case (or a technical feature) with so-called smart components. Due to their focus on a feature, such components are not very reusable. Smart Components communicate with the backend. Typically, in Angular, this communication occurs through a store or services.

ui: UI modules contain so-called dumb or presentational components. These are reusable components that support the implementation of individual features but do not know them directly. The implementation of a design system consists of such components. However, UI modules can also contain general technical components that are used across all use cases. An example of this would be a ticket component, which ensures that tickets are presented in the same way in different features. Such components usually only communicate with their environment via properties and events. They do not get access to the backend or a store.

data: Data modules contain the respective domain model (actually the client-side view of it) and services that operate on it. Such services validate e.g. Entities and communicating with the backend. State management, including the provision of view models, can also be accommodated in data modules. This is particularly useful when multiple features in the same domain are based on the same data.

util: General helper functions etc. can be found in utility modules. Examples of this are logging, authentication or working with date values.

![image](https://github.com/EsdrasSantosDV/Nx-Enterprise-Project/assets/110314802/f16d4f4b-ca4a-4bca-8df7-65b8410fcd9b)


![image](https://github.com/EsdrasSantosDV/Nx-Enterprise-Project/assets/110314802/c206dc4d-d07e-4154-b078-50abfe1ed1d7)
