@extends('layouts.app') <!--estendo layout.app-->


@section('content')
@foreach ($restaurants as $item)

@if ($item->user_id == $user->id) {

   {{$item->name}}

}

@endif



@endforeach

@endsection
