export interface Category {
  attributes: {
    active: boolean;
    default_product_id: string;
    name: string;
    position: number;
    slug: string;
  };
  id: string;
  links: {
    self: string;
  };
  relationships: {
    default_product: {
      data: {
        id: string;
        type: string;
      };
    };
    products: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
  };
  type: string;
}

export interface Product {
  id: string;
  type: string;
  attributes: [];
  relationships: [];
  links: [];
}
