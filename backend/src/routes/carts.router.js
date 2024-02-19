import RouterClass from './RouterClass'
import { getById, create, addProduct, update, updateQuantity, deleteProduct, deleteAllProducts, generatePurchase } from '../controllers/carts.controller'

class CartRouter extends RouterClass {
    init(){
        this.get('/:cid', ['PUBLIC'], async (req, res) => {
            try{
                const payload = await getById(req, res)
                res.sendSuccess(payload)
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.post('/', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await create(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.post('/:cid/products/:pid', ['USER', 'PREMIUM'], async (req, res) => {
            try{
                res.sendSuccess(await addProduct(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.put('/:cid', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await update(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.put('/:cid/products/:pid', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await updateQuantity(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.delete('/:cid/products/:pid', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await deleteProduct(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        
        this.delete('/:cid', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await deleteAllProducts(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })

        this.get('/:cid/purchase', ['PUBLIC'], async (req, res) => {
            try{
                res.sendSuccess(await generatePurchase(req, res))
            }catch(error){
                res.sendServerError(error.message)
            }
        })
    }
}

export default CartRouter;