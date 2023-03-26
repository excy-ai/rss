import React from 'react';
import InputField from 'components/input/InputField';
import SelectField from 'components/select/SelectField';
import { Form } from 'components/form/Form';
import { AddCardFormProps, AddCardFormState, CardProps, Validation, ValidationError } from 'types';
import {
  generateIsAnyCheckedValidation,
  generateIsFieldEmptyValidation,
  toValueWithRef,
} from 'utils';
import { Popup } from 'components/popup/Popup';
import { ConfirmationDialog } from 'components/dialog/ConfirmationDialog';

import './AddCardForm.scss';

export class AddCardForm extends React.Component<AddCardFormProps, AddCardFormState> {
  state: AddCardFormState = {
    errors: [],
    isPopupOpened: false,
  };
  formRef = React.createRef<HTMLFormElement>();
  breedNameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  weightRef = React.createRef<HTMLSelectElement>();
  temperamentRefs = this.props.temperaments.map(toValueWithRef<HTMLInputElement>);
  lifespanRefs = this.props.lifespans.map(toValueWithRef<HTMLInputElement>);
  fileRef = React.createRef<HTMLInputElement>();
  validations: Array<Validation> = [
    generateIsFieldEmptyValidation('field-name', this.breedNameRef, "Breed name can't be empty"),
    generateIsFieldEmptyValidation('field-date', this.dateRef, "Date can't be empty"),
    generateIsFieldEmptyValidation('field-weight', this.weightRef, 'Weight must be selected'),
    generateIsAnyCheckedValidation(
      'field-temperament',
      this.temperamentRefs.map((it) => it.ref),
      'At least one must be selected'
    ),
    generateIsAnyCheckedValidation(
      'field-lifespan',
      this.lifespanRefs.map((it) => it.ref),
      'Must be selected'
    ),
    generateIsFieldEmptyValidation('field-file', this.fileRef, "Image can't be empty"),
  ];

  onError = (errors: ValidationError[]) => {
    this.setState({ errors });
  };

  findFieldError = (id: string) => {
    const foundErrors = this.state.errors.filter((it) => it.id === id);
    return foundErrors.length ? foundErrors[0] : undefined;
  };

  onSubmit = () => {
    const files = this.fileRef.current?.files;
    const file = files ? files[0] : undefined;
    const imageUrl = file ? URL.createObjectURL(file) : undefined;
    const card: CardProps = {
      date: this.dateRef.current?.value,
      weight: this.weightRef.current?.value || this.props.weights[0],
      name: this.breedNameRef.current?.value || 'Unknown',
      temperament: this.temperamentRefs
        .filter((it) => it.ref.current?.checked)
        .map((it) => it.ref.current?.value)
        .join(', '),
      origin: 'Russia',
      country_code: 'RU',
      life_span: this.lifespanRefs
        .filter((it) => it.ref.current?.checked)
        .map((it) => it.ref.current?.value)
        .join(', '),
      image_url: imageUrl,
    };
    this.props.handleSubmit(card);
    this.togglePopup();
  };

  clearForm = () => {
    this.formRef.current?.reset();
    this.togglePopup();
  };

  togglePopup = () => {
    this.setState({ isPopupOpened: !this.state.isPopupOpened });
  };

  render() {
    const temperamentError = this.findFieldError('field-temperament');
    const lifespanError = this.findFieldError('field-lifespan');
    const errorPlaceholder = <div className="form__error-placeholder" />;

    return (
      <>
        <Form
          className="card-form"
          onSubmit={this.onSubmit}
          validations={this.validations}
          onError={this.onError}
          refProp={this.formRef}
        >
          <h3 className="card-form__title">New Card Form</h3>
          <InputField
            id="field-name"
            type="text"
            label="Breed name"
            refProp={this.breedNameRef}
            error={this.findFieldError('field-name')}
          />
          <InputField
            id="field-date"
            type="date"
            label="Date of invention"
            refProp={this.dateRef}
            error={this.findFieldError('field-date')}
          />
          <SelectField
            label={'Select Average cat weight'}
            options={this.props.weights}
            refProp={this.weightRef}
          />
          <div className={'form__checkbox-group'}>
            <span>Select breed temper</span>
            {this.temperamentRefs.map((it) => (
              <InputField
                key={it.id}
                type="checkbox"
                refProp={it.ref}
                value={it.value}
                id={it.id}
              />
            ))}
            {temperamentError ? (
              <span className="form__error">{temperamentError.message}</span>
            ) : (
              errorPlaceholder
            )}
          </div>
          <div className={'form__radio-group'}>
            <span>Select breed average lifespan</span>
            {this.lifespanRefs.map((it) => (
              <InputField
                key={it.id}
                name="radio-group"
                type="radio"
                refProp={it.ref}
                value={it.value}
                id={it.id}
              />
            ))}
            {lifespanError ? (
              <span className="form__error">{lifespanError.message}</span>
            ) : (
              errorPlaceholder
            )}
          </div>
          <InputField
            label="Image"
            id="field-file"
            type="file"
            fileTypes=".jpg, .jpeg, .png, .svg"
            refProp={this.fileRef}
            error={this.findFieldError('field-file')}
          />
          <InputField
            id={'submit-button'}
            type={'submit'}
            className="form__submit"
            inputClassName="form__submit-input"
            hideError
          />
        </Form>
        {this.state.isPopupOpened && (
          <Popup>
            <ConfirmationDialog text="Data has been saved" onOkClick={this.clearForm} />
          </Popup>
        )}
      </>
    );
  }
}
