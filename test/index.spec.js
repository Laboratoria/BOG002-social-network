import MockFirebase from 'mock-cloud-firestore';
import {
  collectionPost,
  deletePosts,
  getPosts,
} from '../src/index.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        post123: {
          Contents: 'Me gusta comer helado',
          Date: '13 de mayo de 2021',
          Title: 'dana@gmail.com',
          uid: '123abc',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('collectionPost', () => {
  it('el titulo de la publicación deberia ser: ana@gmail.com', (done) => {
    const addPost = collectionPost('ana@gmail.com', 'Hola chicas', 1301090400, '123abcd');
    return addPost
      .then((data) => {
        expect(data._data.Title).toBe('ana@gmail.com'); // eslint-disable-line
        done();
      });
  });
  it('Debería eliminar un post', (done) => {
    const deleteP = deletePosts('post123');
    return deleteP
      .then(() => {
        getPosts((data) => {
          const resultado = data.docs.find((post) => post.id === 'post123');
          expect(resultado).toBe(undefined);
          done();
        });
      });
  });
});
