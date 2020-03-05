import Index from './index.interface';
import CreateAnimationFactory from './createAnimationFactory';

Index.initAnimation();

export default (description) => new CreateAnimationFactory(description);
