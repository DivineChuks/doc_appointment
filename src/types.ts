export interface PaymentConfig {
    public_key: string;
    tx_ref: string;
    amount: number;
    currency: string;
    payment_options: string;
    customer: {
      email: string;
      phone_number: string;
      name: string;
    };
    customizations: {
      title: string;
      description: string;
      logo: string;
    };
  }

  export interface NavLinksProps{
    name: string,
    url: string,
  }