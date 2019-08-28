import Component from '@ember/component';

export default Component.extend({
    actions : {
        showDish(dish){
            alert(dish);
        }
    }
});
