import { Routes } from '@angular/router';
import { Admin } from './Component/admin/admin';
import { ControlFlow } from './Component/control-flow/control-flow';
import { signal } from '@angular/core';
import { Signal } from './Component/signal/signal';
import { ReactiveForm } from './Component/reactive-form/reactive-form';
import { Attribute } from './Component/attribute/attribute';
import { DataBinding } from './Component/data-binding/data-binding';

export const routes: Routes = [
  {
    path: 'data-binding',
   component:DataBinding
   
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'conrol-flow',
    component: ControlFlow,
  },
  {
    path: 'signl',
    component: Signal,
  },
  {
    path: 'reactiveform',
    component: ReactiveForm,
  },
  {
    path:'Attribute',
    component:Attribute
  }
];
