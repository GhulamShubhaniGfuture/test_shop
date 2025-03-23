// User Module APIs
/**
 * Authentication APIs
 * 
 * POST /api/auth/register - Register a new user
 * POST /api/auth/login - User login
 * POST /api/auth/refresh-token - Refresh access token
 * POST /api/auth/forgot-password - Send password reset email
 * POST /api/auth/reset-password - Reset password with token
 * POST /api/auth/verify-email - Verify email with token
 * POST /api/auth/logout - User logout
 * POST /api/auth/google - Google OAuth login
 * 
 * User Profile APIs
 * 
 * GET /api/users/profile - Get user profile
 * PUT /api/users/profile - Update user profile
 * PUT /api/users/password - Update password
 * POST /api/users/avatar - Upload avatar
 * DELETE /api/users/avatar - Delete avatar
 * GET /api/users/orders - Get user orders
 * GET /api/users/reviews - Get user reviews
 */

// Address Module APIs
/**
 * POST /api/addresses - Add a new address
 * GET /api/addresses - Get all addresses for logged in user
 * GET /api/addresses/:addressId - Get address by ID
 * PUT /api/addresses/:addressId - Update address
 * DELETE /api/addresses/:addressId - Delete address
 * PATCH /api/addresses/:addressId/default - Set address as default
 */

// Product Module APIs
/**
 * GET /api/products - Get all products (with filtering, pagination, sorting)
 * GET /api/products/:productId - Get product details
 * POST /api/products - Add a new product (admin/seller)
 * PUT /api/products/:productId - Update product (admin/seller)
 * DELETE /api/products/:productId - Delete product (admin/seller)
 * GET /api/products/search - Search products
 * GET /api/products/featured - Get featured products
 * GET /api/products/new-arrivals - Get new arrival products
 * GET /api/products/bestsellers - Get bestselling products
 * GET /api/products/:productId/related - Get related products
 * POST /api/products/:productId/upload-images - Upload product images
 * GET /api/products/by-category/:categoryId - Get products by category
 * GET /api/products/by-seller/:sellerId - Get products by seller
 */

// Category Module APIs
/**
 * GET /api/categories - Get all categories
 * GET /api/categories/:categoryId - Get category by ID
 * POST /api/categories - Create new category (admin)
 * PUT /api/categories/:categoryId - Update category (admin)
 * DELETE /api/categories/:categoryId - Delete category (admin)
 * GET /api/categories/tree - Get category tree structure
 * GET /api/categories/:categoryId/subcategories - Get subcategories
 * GET /api/categories/:categoryId/products - Get products in a category
 */

// Cart Module APIs
/**
 * GET /api/cart - Get cart for current user
 * POST /api/cart/items - Add item to cart
 * PUT /api/cart/items/:productId - Update cart item quantity
 * DELETE /api/cart/items/:productId - Remove item from cart
 * DELETE /api/cart/clear - Clear cart
 * POST /api/cart/apply-coupon - Apply coupon to cart
 * DELETE /api/cart/remove-coupon - Remove coupon from cart
 * POST /api/cart/checkout - Proceed to checkout from cart
 */

// Order Module APIs
/**
 * POST /api/orders - Create a new order
 * GET /api/orders - Get all orders for current user
 * GET /api/orders/:orderId - Get order details
 * PUT /api/orders/:orderId/cancel - Cancel order
 * GET /api/orders/:orderId/tracking - Get order tracking info
 * POST /api/orders/:orderId/return - Request order return
 * GET /api/orders/recent - Get recent orders
 * 
 * Admin/Seller Order APIs
 * 
 * GET /api/admin/orders - Get all orders (admin)
 * GET /api/admin/orders/:orderId - Get order details (admin)
 * PUT /api/admin/orders/:orderId/status - Update order status (admin/seller)
 * PUT /api/admin/orders/:orderId/tracking - Add tracking information (admin/seller)
 */

// Payment Module APIs
/**
 * POST /api/payments/intent - Create payment intent
 * POST /api/payments/process - Process payment
 * GET /api/payments/:paymentId - Get payment details
 * POST /api/payments/:paymentId/refund - Process refund
 * GET /api/payments/methods - Get available payment methods
 * POST /api/payments/verify-webhook - Payment gateway webhook endpoint
 */

// Review Module APIs
/**
 * POST /api/reviews - Create a new review
 * GET /api/reviews/product/:productId - Get reviews for a product
 * GET /api/reviews/:reviewId - Get review details
 * PUT /api/reviews/:reviewId - Update a review
 * DELETE /api/reviews/:reviewId - Delete a review
 * POST /api/reviews/:reviewId/like - Like a review
 * DELETE /api/reviews/:reviewId/like - Unlike a review
 * GET /api/reviews/user - Get reviews by current user
 */

// Wishlist Module APIs
/**
 * GET /api/wishlist - Get user's wishlist
 * POST /api/wishlist/items - Add item to wishlist
 * DELETE /api/wishlist/items/:productId - Remove item from wishlist
 * DELETE /api/wishlist/clear - Clear wishlist
 * POST /api/wishlist/move-to-cart/:productId - Move item from wishlist to cart
 */

// Seller/Vendor Module APIs
/**
 * POST /api/sellers/register - Register as a seller
 * GET /api/sellers/profile - Get seller profile
 * PUT /api/sellers/profile - Update seller profile
 * POST /api/sellers/documents - Upload business documents
 * GET /api/sellers/dashboard - Get seller dashboard stats
 * GET /api/sellers/products - Get seller products
 * GET /api/sellers/orders - Get orders for seller products
 * PUT /api/sellers/orders/:orderId/status - Update order status
 * GET /api/sellers/transactions - Get payment transactions
 * GET /api/sellers/reviews - Get reviews for seller products
 * 
 * Admin Seller Management APIs
 * 
 * GET /api/admin/sellers - Get all sellers (admin)
 * GET /api/admin/sellers/:sellerId - Get seller details (admin)
 * PUT /api/admin/sellers/:sellerId/verify - Verify seller (admin)
 * PUT /api/admin/sellers/:sellerId/status - Update seller status (admin)
 */

// Notification Module APIs
/**
 * GET /api/notifications - Get user notifications
 * GET /api/notifications/:notificationId - Get notification details
 * PUT /api/notifications/:notificationId/read - Mark notification as read
 * PUT /api/notifications/read-all - Mark all notifications as read
 * DELETE /api/notifications/:notificationId - Delete notification
 * GET /api/notifications/unread-count - Get unread notifications count
 * 
 * Admin Notification APIs
 * 
 * POST /api/admin/notifications - Send notification (admin)
 * POST /api/admin/notifications/bulk - Send bulk notifications (admin)
 */

// Promotion/Coupon Module APIs
/**
 * GET /api/coupons - Get available coupons
 * GET /api/coupons/:code/validate - Validate coupon code
 * 
 * Admin Coupon Management APIs
 * 
 * POST /api/admin/coupons - Create new coupon (admin)
 * GET /api/admin/coupons - Get all coupons (admin)
 * GET /api/admin/coupons/:couponId - Get coupon details (admin)
 * PUT /api/admin/coupons/:couponId - Update coupon (admin)
 * DELETE /api/admin/coupons/:couponId - Delete coupon (admin)
 * 
 * Promotion APIs
 * 
 * GET /api/promotions - Get active promotions
 * GET /api/promotions/:promotionId - Get promotion details
 * 
 * Admin Promotion Management APIs
 * 
 * POST /api/admin/promotions - Create new promotion (admin)
 * GET /api/admin/promotions - Get all promotions (admin)
 * PUT /api/admin/promotions/:promotionId - Update promotion (admin)
 * DELETE /api/admin/promotions/:promotionId - Delete promotion (admin)
 */

// Admin Dashboard APIs
/**
 * GET /api/admin/dashboard/stats - Get dashboard statistics
 * GET /api/admin/dashboard/sales - Get sales reports
 * GET /api/admin/dashboard/users - Get user statistics
 * GET /api/admin/dashboard/products - Get product statistics
 * GET /api/admin/dashboard/orders - Get order statistics
 */