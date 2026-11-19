Readme file

1. Prerequisite: have Node.js installed, have package manager installed
2. Step one: download files from github
3. Step two: install download modules necessary to run
4. Run npm run dev in terminal
5. Able to browse albums available for purchase.  Can select the name below the album to add album to cart, or click on picture to view album details.  Purchase option in the cart, to write in your email, name, and address information, or manage cart to remove selections.
*  <App /> (Owner: cart [Array], isCartOpen [Boolean]) 
o <Navbar> (Sticky: Logo, Genre Links, CartBadge Button with item count)
* Cart Checkout
* Information details
* Cart Management
* Album deletion
o <Routes> 
* <Route element="{<CatalogPage" path="/"/>}>
* <CatalogHero> 
* <GenreFilterBar> (Controlled button group updatingselectedGenre) 
* <AlbumGrid> (Responsive CSS Grid) 
o <AlbumCard> (.map() iterator) 
* AlbumDetailPage
* onAddToCart
