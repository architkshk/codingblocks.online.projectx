import Ember from 'ember';

export function getEmbeded(param) {
  if(param[0]){
    return (param[0]).replace('watch?v=','embed/').concat('?autoplay=1&rel=0')
  }
  else
    return null
}

export default Ember.Helper.helper(getEmbeded);
