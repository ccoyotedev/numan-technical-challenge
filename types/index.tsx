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
  type: "product";
  attributes: {
    name: string;
    slug: string;
    alt_name: string;
    category_id: string;
    default_product_variant_id: string;
    prescription_required: boolean;
    questionnaire_required: boolean;
    medicine: boolean;
    description: string;
    long_description: string;
    summary: string;
    availability: string;
    dosage: string;
    risks: string;
    side_effects: string;
    usage: string;
    active: boolean;
    position: number;
  };
  relationships: {
    default_product_variant: {
      data: {
        id: string;
        type: string;
      };
    };
    product_variants: {
      data: Array<{
        id: string;
        type: string;
      }>;
    };
  };
  links: {
    self: string;
  };
}

export interface ProductVariant {
  id: string;
  type: "product_variant";
  attributes: {
    variant: string;
    price: number;
    quantity: number;
    unit: string;
    product_id: string;
    is_subscription_based: boolean;
    subscription_number_repeats: number;
    subscription_frequency: string;
    active: boolean;
    position: number;
    average_monthly_quantity: number | null;
    dosage: string;
    dosage_quantity: number | null;
    dosage_unit: string | null;
    unit_price: number;
  };
  relationships: {
    product: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

export interface ExtendedProduct extends Product {
  variants: ProductVariant[];
}

export interface Order {
  price: number;
  productName: string;
  subscriptionFrequency: string;
  variant: string;
}

export type Detail = "firstName" | "lastName" | "phoneNumber" | "emailAddress";
export type PersonalDetails = {
  [key in Detail]: string;
};
