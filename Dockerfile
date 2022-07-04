FROM ruby:3.0.0
WORKDIR /brs
COPY Gemfile /brs/Gemfile
COPY Gemfile.lock /brs/Gemfile.lock
RUN bundle install
COPY . /brs
