import index from './index.interface';

export default function chooseImage(
  params = {
    type: 'choice',
    quality: '60'
  }
) {
  params.type = params.type || 'choice';
  params.quality = params.quality || '60';
  return new Promise((resolve, reject) => {
    index.chooseImage(
      params,
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
