

interface IWishlistItem {
    productId: string;
    variantId?: string;
    addedAt: Date;
  }
  
  interface IWishlist extends Document {
    wishlistId: string;
    userId: string;
    items: IWishlistItem[];
    createdAt: Date;
    updatedAt: Date;
  }

  export {
    IWishlistItem,
    IWishlist
  }