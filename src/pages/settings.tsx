import {
  Form,
  FormInput,
  FormSubmitBtn,
  SettingsContainer,
} from "../styles/pages/settings";

export default function Settings() {
  return (
    <SettingsContainer>
      <Form>
        <label htmlFor="profile-image">Foto de perfil</label>
        <FormInput
          type="text"
          name="profile-image"
          id="profile-image"
          placeholder="Insira um url válido"
        />

        <label htmlFor="username">Nome de usuário</label>
        <FormInput
          type="text"
          name="username"
          id="username"
          placeholder="Insira um nome legal"
        />

        <label htmlFor="password">senha</label>
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="Insira uma nova senha"
        />

        <FormSubmitBtn type="submit" variation={"submit"} />
        <FormSubmitBtn variation={"cancel"} />
      </Form>
    </SettingsContainer>
  );
}
