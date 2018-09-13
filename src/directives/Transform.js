export default {
    bind(el, binding, vnode) {

        let { arg, value } = binding;

        let current = 0;

        let validArg = ['rotate', 'scale'];

        if(!validArg.filter(item => item == arg).length) throw new Error(`v-transform: Invalid arg ${arg}`);

        el.addEventListener('dblclick', function(e) {
            let increment = value || 90
            let effect;

            if(arg === 'rotate') {
                if(binding.modifiers.reverse)
                    current -= increment;
                else 
                    current += increment;

                effect = `rotate(${current}deg)`;
            } else if(arg === "scale") {
                effect = `scale(${increment})`;
            }

            this.style.transform = effect;
            this.style.transition = binding.modifiers.animate ? `transform 0.5s` : ``;
        });

    }
};