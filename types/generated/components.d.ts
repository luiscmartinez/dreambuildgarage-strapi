import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'address-book';
  };
  attributes: {
    phone: Attribute.String;
    address: Attribute.String;
    email: Attribute.String;
  };
}

export interface SharedAbout extends Schema.Component {
  collectionName: 'components_shared_abouts';
  info: {
    displayName: 'about';
    icon: 'person-booth';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
    icon: 'landmark';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media;
    description: Attribute.String;
    buttonTitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'shared.about': SharedAbout;
      'shared.hero': SharedHero;
    }
  }
}
