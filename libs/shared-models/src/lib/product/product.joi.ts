import * as Joi from '@hapi/joi';

// export const GetPriceRequestValidate = {
//   itemCode: Joi.string().required(),
//   quantity: Joi.number().required(),
//   coupon: Joi.string().required().allow(''),
// };
// export const GetPriceResponseValidate = {
//   price: Joi.number().required(),
//   normalPrice: Joi.number().required(),
//   message: Joi.string().required().allow(''),
// };

export const EditProductRequestValidate = {
  itemCode: Joi.string().required(),
  price: Joi.number().allow(null),
  quantity: Joi.number().allow(null),
}

export const EditProductResponseValidate = {
  status: Joi.number().required(),
  message: Joi.string().required()
}
