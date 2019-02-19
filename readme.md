# Código usado para aprender Django

## Setup do projeto

1.  Criar um `virtual environment`

    ```
    virtualenv env
    Scripts\activate
    ```

2. Clonar o repositório
    
    ```
    mkdir blog_django
    cd blog_django
    git clone git@github.com:rjLelis/blog_django.git
    ```

3. Instalar as dependências

    ```
    pip install -r requirements.txt
    ```

4. Rodar as migrações

    ```
    python manage.py migrate
    ```

5. Criar super user

    ```
    python manage.py createsuperuser
    ```

[Curso](https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p) de Django