import {debounce} from './utils';
import TopBack from 'components/content/topback/TopBack'


export const imageListenMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 20);
    this.$bus.$on("itemLoadImg", () => {
      refresh();
    });

    console.log('全局混入')
  },
}


export const topBackMixin = {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    TopBack
  },
  methods: {
    topBack() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}