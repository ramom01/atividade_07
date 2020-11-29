import './App.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

const ops = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

const schema = yup.object().shape({
  nome: yup.string().required('Campo obrigatorio').min(10, 'Nome completo deve conter no minimo 10 carecteres'),
  idade: yup.number().required('Campo obrigatorio').min(17, 'Cadastro apenas para maiores de 16 anos'),
  cpf: yup.string().required('Campo obrigatorio').min(11, 'CPF deve conter 11 caracteres'),
  matricula: yup.string().required('Campo obrigatorio').length(9, 'A matricula deve conter 9 digitos'),
  curso: yup.string().required('Campo obrigatorio').min(8, 'Tamanho minimo igual a 8'),
  endereco: yup.string().required('Campo obrigatorio'),
  numero: yup.number(),
  complemento: yup.string(),
  bairro: yup.string().required('Campo Obrigatorio'),
  cidade: yup.string().required('Campo Obrigatorio'),
  estado: yup.string().required('Campo Obrigatorio'),
  cep: yup.string().required('Campo Obrigatorio').min(8, 'CEP deve conter apenas 8 caracteres')
})

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      alert("Aluno cadastrado com sucesso!" + "\n" + JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400)
  };

  return (
    <Formik
      initialValues={{
        nome: '',
        idade: '',
        cpf: '',
        matricula: '',
        curso: '',
        endereco: '',
        numero: '',
        complmento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
      }}
      validationSchema={schema}
      initialStatus={{ isValidating: false }}
      onSubmit={handleSubmitting}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
          <form className="form-style" onSubmit={handleSubmit}>
            <label>
              Nome:
              <Field
                name="nome"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="nome" className="error" component="span" />


            <label>
              Idade:
              <Field
                name="idade"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="idade" className="error" component="span" />


            <label>
              CPF:
              <InputMask mask="999.999.999-99"
                name="cpf"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="cpf" className="error" component="span" />


            <label>
              Matricula:
              <Field
                name="matricula"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="matricula" className="error" component="span" />


            <label>
              Curso:
              <Field
                name="curso"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="curso" className="error" component="span" />


            <label>
              Endereco:
              <Field
                name="endereco"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="endereco" className="error" component="span" />


            <label>
              Numero:
              <Field
                name="numero"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="numero" className="error" component="span" />


            <label>
              Complemento:
              <Field
                name="complemento"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="complemento" className="error" component="span" />


            <label>
              Bairro:
              <Field
                name="bairro"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="bairro" className="error" component="span" />


            <label>
              Cidade:
              <Field
                name="cidade"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="cidade" className="error" component="span" />

            <label>
              Estado:
            <Field
                className="lista-estados"
                name="estado"
                type="text"
                as="select"
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {ops.map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Field>
            </label>
            <ErrorMessage name="estado" className="error" component="span" />


            <label>
              Cep:
              <InputMask mask="99999-999"
                name="cep"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <ErrorMessage name="cep" className="error" component="span" />
            <input type="submit" value="Cadastrar" disabled={isSubmitting} />
          </form>
        )}
    </Formik>
  );
}



export default FormYupValidation;
