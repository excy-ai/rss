import { FC, useState } from 'react';

import { useForm } from 'react-hook-form';

import { ConfirmationDialog } from 'components/dialog/ConfirmationDialog';
import Form from 'components/form/Form';
import InputField from 'components/input/InputField';
import Popup from 'components/popup/Popup';
import SelectField from 'components/select/SelectField';
import { AddCardFormProps, CatCardProps } from 'types';
import { generateId } from 'utils';

import './AddCardForm.scss';

interface FormCard {
  breed: string;
  date: string;
  weight: string;
  temperament: string[];
  lifespan: string;
  image: FileList;
}

const AddCardForm: FC<AddCardFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormCard>();
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const togglePopup = () => setIsPopupOpened(!isPopupOpened);

  const onSubmit = (data: FormCard) => {
    const { breed, date, temperament, lifespan, weight, image } = data;
    const file = image ? image[0] : undefined;
    const imageUrl = file ? URL.createObjectURL(file) : undefined;
    const card: CatCardProps = {
      id: generateId(),
      date,
      weight: weight,
      name: breed,
      temperament: temperament.join(', '),
      origin: 'Russia',
      country_code: 'RU',
      life_span: lifespan,
      image_url: imageUrl,
    };
    props.handleSubmit(card);
    togglePopup();
  };

  const clearForm = () => {
    reset();
    togglePopup();
  };
  const basicValidation = { required: 'Field cannot be empty' };
  const errorPlaceholder = <div className="form__error-placeholder" />;

  return (
    <>
      <Form className="card-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="card-form__title">New Card Form</h3>
        <InputField
          id="field-name"
          name="breed"
          register={() => register('breed', basicValidation)}
          type="text"
          label="Breed name"
          error={errors.breed?.message}
        />
        <InputField
          id="field-date"
          name="date"
          register={() => register('date', basicValidation)}
          type="date"
          label="Date of invention"
          error={errors.date?.message}
        />
        <SelectField
          register={() => register('weight')}
          label={'Select Average cat weight'}
          options={props.weights}
        />
        <div className={'form__checkbox-group'}>
          <span>Select breed temper</span>
          {props.temperaments.map((it) => (
            <InputField
              key={it}
              register={() => register('temperament', basicValidation)}
              name="temperament"
              type="checkbox"
              value={it}
              id={it}
            />
          ))}
          {errors.temperament ? (
            <span className="form__error">{errors.temperament.message}</span>
          ) : (
            errorPlaceholder
          )}
        </div>
        <div className={'form__radio-group'}>
          <span>Select breed average lifespan</span>
          {props.lifespans.map((it) => (
            <InputField
              key={it}
              register={() => register('lifespan', basicValidation)}
              name="lifespan"
              type="radio"
              value={it}
              id={it}
            />
          ))}
          {errors.lifespan ? (
            <span className="form__error">{errors.lifespan.message}</span>
          ) : (
            errorPlaceholder
          )}
        </div>
        <InputField
          register={() => register('image', basicValidation)}
          name="image"
          label="Image"
          id="field-file"
          type="file"
          fileTypes=".jpg, .jpeg, .png, .svg"
          error={errors.image?.message}
        />
        <InputField
          id={'submit-button'}
          type={'submit'}
          className="form__submit"
          inputClassName="form__submit-input"
          hideError
        />
      </Form>
      {isPopupOpened && (
        <Popup>
          <ConfirmationDialog text="Data has been saved" onOkClick={clearForm} />
        </Popup>
      )}
    </>
  );
};

export default AddCardForm;
