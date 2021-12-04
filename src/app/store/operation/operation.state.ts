import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Operation } from './operation.model';
import { sum, res, multi, poten, add } from './operation.action';

@State({
  name: 'operation',
  defaults: {
    operation: {},
  },
})
export class PostsState {
  @Selector()
  static getOperation(state: any) {
    return state.operation;
  }

  // Añade un nuevo post al estado
  @Action(add)
  add({ getState, patchState }: StateContext<any>, { payload }: add) {
    const state = getState();
    patchState({
      operation: payload,
    });
  }

  // Añade un nuevo post al estado
  @Action(sum)
  sum({ getState, patchState }: StateContext<Operation>, { payload }: sum) {
    const state = getState();
    patchState({
      number1: state.number1,
      number2: state.number2,
      signo: state.signo,
      result: payload.number1 + payload.number2,
      //posts: [...state.posts, payload]
    });
  }

  /*// Elimina un post del estado
  @Action(RemovePost)
  remove({ getState, patchState }: StateContext<PostsStateModel>, { payload }: RemovePost) {
    patchState({
      posts: getState().posts.filter(post => post.id !== payload)
    });
  }*/
}
