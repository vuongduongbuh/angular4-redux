import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx'
import { Injectable } from "@angular/core";
import { HttpService } from '../../services/http.service';

@Injectable()
export class ProductsService {
    page: any;
    constructor(private httpService: HttpService) {

    }
    
    getProductsByCategory(categoryId, filter) {
        return this.httpService.getAnonymous(
            "products?searchCriteria[filter_groups][1][filters][0][field]=status&searchCriteria[filter_groups][1][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][2][filters][0][field]=product_approve&searchCriteria[filter_groups][2][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=" + categoryId +
            "&searchCriteria[pageSize]=" + filter.pageSize + "&searchCriteria[currentPage]=" + filter.page)
    }

    getProductsByBrand(brand, filter) {
        return this.httpService.getAnonymous(
            "products?searchCriteria[filter_groups][1][filters][0][field]=status&searchCriteria[filter_groups][1][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][2][filters][0][field]=product_approve&searchCriteria[filter_groups][2][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][3][filters][0][field]=visibility&searchCriteria[filter_groups][3][filters][0][value]=1&searchCriteria[filter_groups][3][filters][0][condition_type]=neq" + 
            "&searchCriteria[filter_groups][0][filters][0][field]=product_brand&searchCriteria[filter_groups][0][filters][0][value]=" + brand +
            "&searchCriteria[pageSize]=" + filter.pageSize + "&searchCriteria[currentPage]=" + filter.page)
    }

    getProductsBySeller(seller, filter) {
        return this.httpService.getAnonymous(
            "products?searchCriteria[filter_groups][1][filters][0][field]=status&searchCriteria[filter_groups][1][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][2][filters][0][field]=product_approve&searchCriteria[filter_groups][2][filters][0][value]=1" + 
            "&searchCriteria[filter_groups][3][filters][0][field]=visibility&searchCriteria[filter_groups][3][filters][0][value]=1&searchCriteria[filter_groups][3][filters][0][condition_type]=neq" + 
            "&searchCriteria[filter_groups][0][filters][0][field]=udropship_vendor&searchCriteria[filter_groups][0][filters][0][value]=" + seller +
            "&searchCriteria[pageSize]=" + filter.pageSize + "&searchCriteria[currentPage]=" + filter.page)
    }

    getProductsAlsoLike(productId) {
        return this.httpService.getAnonymous("lotte_custom?name=product_related&product_id=" + productId)
    }

    getProductsRecommended() {
        return this.httpService.getAnonymous("product/recommendation")
    }

    getProductBySku(sku) {
        return this.httpService.getAnonymous("products/" + sku)
    }

    getProductById(id) {
        return this.httpService.getAnonymous("products/id/" + id)
    }
}