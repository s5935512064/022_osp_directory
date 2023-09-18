export {}; // This is here to prevent `PageProps` at the bottom from being exposed

declare global {
  interface IShop {
    shop_cover: any;
    id: string;
    shop_room_no: string;
    shop_fl: string;
    shop_name: string;
    shop_detail: string;
    shop_open: string;
    shop_tel: string;
    shop_facebook: string;
    shop_line: string;
    shop_website: string;
    shop_instagram: string;
    shop_tag: string;
    shop_logo: string;
  }
}
